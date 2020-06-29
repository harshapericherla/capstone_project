const { gql } = require('apollo-server');

const {Job} = require('./schemas/jobSchema');
const {User} = require('./schemas/userSchema');
const {Auth} = require('./schemas/authSchema');

const typeDefs = gql`

    type Query
    {
        _empty:String
    }

    type Mutation
    {
        _empty:String
    }
`;

module.exports = [typeDefs,Job,User,Auth];