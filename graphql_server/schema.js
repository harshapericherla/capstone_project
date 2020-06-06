const { gql } = require('apollo-server');

const typeDefs = gql`

    type User
    {
        id: ID!
        userName: String
    }

    type Job
    {
        id: ID!
        name: String
        posted_by: ID
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