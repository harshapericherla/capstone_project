import {Fragment} from 'react';
import { useQuery } from "@apollo/react-hooks";
import {GET_JOBS} from '../graphql/queries';
import React from 'react';

export const JobsList = () => {
    const { data, loading, error } = useQuery(GET_JOBS);
  
    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
  
    return (
      <Fragment>
          <div>
            {data.jobs && data.jobs.map(job => (
                <div class = "listContent">
                  <div id = "cards">
                    <div class = "flex-card">
                      <div id = "circle">
                        <div class = "circle">
                          <span>A</span>
                        </div>
                        <div class = "name">
                          <p>{job.companyName}</p>
                          <div class = "location">
                            <span class="fa fa-location-arrow"></span>
                            <p>{job.location}</p>
                          </div>
                        </div>
                      </div>
                      <div class ="short-description">
                        <span class = "role">{job.name}</span>
                        <span class = "desc">{job.description}</span>
                      </div>
                      <hr></hr>
                      <div class= "type">
                        <span class ="fa fa-suitcase"></span>
                        <span class = "jobtype">{job.type}</span>
                        <span class="fa fa-clock-o"></span>
                        <span class = "time">6 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div> 
            ))}
            <div class="pagination">
              <a href="#">&laquo;</a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
              
      </Fragment>
    );
  };
