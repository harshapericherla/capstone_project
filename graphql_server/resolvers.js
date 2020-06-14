const {JobResolver} = require('./schemas/jobSchema');
const _ = require('lodash');

const resolvers = {
    Query: {

    }
}

const finalResolver = _.merge(resolvers,JobResolver);

module.exports = finalResolver;