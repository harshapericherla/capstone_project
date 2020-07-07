const {getJobs, createJob} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');


exports.Job = `
    
    extend type Query
    {
        jobs(searchInput:JobInput): JobResult
        searchJobs(searchText: String): [Job]!
        jobPagination(pageLimit: Int): Int
    }

    extend type Mutation
    {
        createJob(createJobInput: CreateJobInput): JobMutationResponse
    } 


    input CreateJobInput
    {
        name: String
        location:String
        type:String
        description:String
        companyName:String
    }

    input JobInput
    {
        pageNum:Int
        pageLimit:Int
        searchTxt: String
        searchLocation: String
    }

    type JobMutationResponse
    {
        success: Boolean
    }

    type JobResult
    {
        jobs:[Job]!
        pages: Int
    }
    type Job
    {
        _id: ID!
        name: String
        posted_by: User
        location:String
        type:String
        description:String
        companyName:String
    }
`;



exports.JobResolver = {
    Query:{
        jobs: async (_,{searchInput},{user}) => { 
            let {pageNum,pageLimit,searchTxt,searchLocation} = searchInput;
            return await getJobs(pageNum,pageLimit,searchTxt,searchLocation);
        }
    },
    Mutation:{
        createJob: async(_,{createJobInput},{user}) => {
            
            await createJob(createJobInput,user);
            return {"success":true};
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    }
} 