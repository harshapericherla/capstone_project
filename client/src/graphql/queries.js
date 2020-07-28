import gql from "graphql-tag";

export const GET_JOBS = gql`
query jobQuery(
  $searchInput:JobInput
){
  jobs(searchInput:$searchInput){
     jobs {
      _id
      name
      location
      type
      description
      companyName
      roles
      responsibilities
      posted_by
      {
        _id
        name
      }
    }
    pages
  }
}
`;

export const JOB_APPLIED = gql`
query jobApplied(
  $jobId:String!
){
  jobApplied(jobId:$jobId){
    isApplied
  }
}
`;


export const JOBS_APPLIED = gql`
query jobsApplied{
  appliedJobs{
    jobs
    {
      _id
      resumeLink
      job{
        _id
        name
        location
        type
        description
        companyName
        roles
        responsibilities
      }
    }
  }
}
`;
