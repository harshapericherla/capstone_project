const {getJobs} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');


exports.Job = `
    
    extend type Query
    {
        jobs(searchInput:JobInput): JobResult
        searchJobs(searchText: String): [Job]!
        jobPagination(pageLimit: Int): Int
    }
    
    input JobInput
    {
        pageNum:Int
        pageLimit:Int
        searchTxt: String
        searchLocation: String
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
        jobs: async (_,{searchInput},{dataSources}) => { 
            let {pageNum,pageLimit,searchTxt,searchLocation} = searchInput;
            return await getJobs(pageNum,pageLimit,searchTxt,searchLocation);
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    }
} 