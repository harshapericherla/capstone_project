import {Fragment} from 'react';
import { useQuery } from "@apollo/react-hooks";
import {GET_JOBS} from '../../graphql/queries';
import React from 'react';
import { JobsPagination } from './JobsPagination';
import { useSelector, useDispatch } from 'react-redux';
import {FETCH_JOBS} from '../../actions/types';

export const JobsList = () => {

    const {jobs} = useSelector(state => state.jobs);
    const dispatch = useDispatch();
    const limit = parseInt(process.env.PAGINATION_LIMIT);
    const { data, loading, error } = useQuery(GET_JOBS,{variables:{pageNumber:1,pageLimit:limit}});
    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    
    if(data && !jobs)
    {
       dispatch({type:FETCH_JOBS,payload:data});
    }
    return (
      <Fragment>
          <div>
            {jobs && jobs.map(job => (
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
          <JobsPagination/>
          </div>
              
      </Fragment>
    );
  };
