const { gql } = require('apollo-server');

const {Job} = require('./schemas/jobSchema');
const {User} = require('./schemas/userSchema');

const typeDefs = gql`

    type Query
    {
        _empty:String
    }

`;

module.exports = [typeDefs,Job,User];