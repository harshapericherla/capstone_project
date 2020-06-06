const mongoose = require('mongoose');
const {getJobs} = require('./resolvers/QueryResolver');

module.exports = {
    Query: {
        jobs: async (_,__,{dataSources}) => { 
            return await getJobs();
        }
    }
}