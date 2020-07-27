import gql from "graphql-tag";

export const REGISTER_USER = gql`
    mutation registerUser($userInput: UserInput){
        register(userInput:$userInput){
            isRegistered
        }
    }
`;


export const LOGIN_USER = gql`
mutation loginUser($userInput: UserInput){
    login(userInput:$userInput){
        token
    }
}
`;

export const CREATE_JOB = gql`
mutation createJobMutation($createJobInput: CreateJobInput){
    createJob(createJobInput:$createJobInput){
        success
    }
}
`;

export const APPLY_JOB = gql`
mutation applyJobMutation($file: Upload!,$jobId: String!){
    applyJob(file:$file,jobId:$jobId){
        success
    }
}
`;