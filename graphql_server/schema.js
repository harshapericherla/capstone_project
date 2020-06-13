const { gql } = require('apollo-server');

const typeDefs = gql`

    type User
    {
        _id: ID!
        name: String
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

    input JobInput
    {
        id: ID!
        name: String
        posted_by: ID
    }

    type MutationResponse {
        success: Boolean!
        message: String
    }

    type Query
    {
        jobs(userId: String): [Job]!
    }

    type Mutation
    {
        createJob(job: JobInput!): MutationResponse
    }
`;

module.exports = typeDefs;