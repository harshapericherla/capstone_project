import gql from "graphql-tag";

export const GET_JOBS = gql`
query jobQuery{
    jobs{
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
  }
`;

export const SEARCH_JOBS = gql`
query searchQuery($searchText:String!)
{
  searchJobs(searchText:$searchText){
    _id
    companyName
    name
    posted_by{
      _id
      name
    }
  }
}
`
