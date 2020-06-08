import React, { Component,Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LAUNCHES = gql`
query jobQuery{
    jobs{
      _id
      name
      posted_by
      {
        _id
        name
      }
    }
  }
`;


const JobsList = () => {
    const { data, loading, error } = useQuery(GET_LAUNCHES);
  
    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
  
    return (
      <Fragment>
        {data.jobs && data.jobs.map(job => (
            <div>
               <p>{job.name}</p>
               <p>{job.posted_by.name}</p>
            </div>
        ))}
      </Fragment>
    );
  };
  
  export default JobsList;