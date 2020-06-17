const {getJobs,searchJobs,paginateJobs} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');


exports.Job = `
    
    extend type Query
    {
        jobs(pageNum:Int,pageLimit:Int): [Job]!
        searchJobs(searchText: String): [Job]!
        jobPagination(pageLimit: Int): Int
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
        jobs: async (_,{pageNum,pageLimit},{dataSources}) => { 
            return await getJobs(pageNum,pageLimit);
        },
        searchJobs: async(_,{searchText}) => {
            return await searchJobs(searchText);
        },
        jobPagination:async (_,{pageLimit}) => {
            return await paginateJobs(pageLimit);
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    }
} 