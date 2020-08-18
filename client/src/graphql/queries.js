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
      postedDate
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
        postedDate
      }
      appliedDate
    }
  }
}
`;

export const JOBS_POSTED= gql`
query jobsPosted{
  jobsPosted{
    jobs
    {
        _id
        name
        location
        type
        description
        companyName
        postedDate
    }
  }
}
`;

export const GET_APPLICANTS= gql`
query getapplciants($jobId:String!){
  postedJobsUsers(jobId:$jobId){
    users
    {
        user{
          _id
          name
          email
        }
        resumeLink
    }
  }
}
`;



