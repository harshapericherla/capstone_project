const { gql } = require('apollo-server');

const typeDefs = gql`
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
        jobs: [Job]!
    }

    type Mutation
    {
        createJob(job: JobInput!): MutationResponse
    }
`;

module.exports = typeDefs;