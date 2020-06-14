const {getJobs,searchJobs} = require('../resolvers/jobResolver');
const {getUserById} = require('../resolvers/userResolver');


exports.Job = `
    
    extend type Query
    {
        jobs(userId: String): [Job]!
        searchJobs(searchText: String): [Job]!
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
        jobs: async (_,__,{dataSources}) => { 
            return await getJobs();
        },
        searchJobs: async(_,{searchText}) => {
            return await searchJobs(searchText);
        }
    },
    Job : {
        posted_by: async({_postedBy},__) => {
            return await getUserById(_postedBy);
        }
    }
} 