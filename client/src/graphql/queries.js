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
