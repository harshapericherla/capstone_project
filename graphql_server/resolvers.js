const {JobResolver} = require('./schemas/jobSchema');
const {AuthResolver} = require('./schemas/authSchema');
const _ = require('lodash');

const resolvers = {
    Query: {

    }
}

const finalResolver = _.merge(resolvers,JobResolver,AuthResolver);

module.exports = finalResolver;