import gql from "graphql-tag";

export const GET_JOBS = gql`
query jobQuery($pageNumber:Int,$pageLimit:Int){
    jobs(pageNum:$pageNumber,pageLimit:$pageLimit){
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
    name
    location
    type
    description
    companyName
    posted_by{
      _id
      name
    }
  }
}
`

export const GET_TOTAL_PAGINATION = gql`
query paginateQuery($pageLimit:Int)
{
   jobPagination(pageLimit:$pageLimit)
}
`