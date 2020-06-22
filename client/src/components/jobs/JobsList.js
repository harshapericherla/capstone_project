import {Fragment, useEffect, useState} from 'react';
import { useLazyQuery } from "@apollo/react-hooks";
import {GET_JOBS} from '../../graphql/queries';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {FETCH_JOBS, FETCH_PAGINATION, SELECT_JOB} from '../../actions/types';

export const JobsList = () => {

    const [initialLoaded,setInitialLoaded] = useState(false);

    const {jobs} = useSelector(state => state.jobs);
    const dispatch = useDispatch();
    const limit = parseInt(process.env.PAGINATION_LIMIT);
    const [jobsQ, {data }] = useLazyQuery(GET_JOBS);


    useEffect(() => {
        if(!jobs)
        {
           jobsQ({variables:{searchInput:{pageNum:1,pageLimit:limit,searchTxt:""}}});
        }
    });

    if(!initialLoaded && data && data.jobs)
    {
        setInitialLoaded(true);
        dispatch({type:FETCH_JOBS,payload:data.jobs});
        dispatch({type:FETCH_PAGINATION,payload:{pagination:data.jobs.pages}});
    }

    return (
      <Fragment>
          <div>
            {jobs && jobs.map(job => (
                <div class = "listContent" onClick={() => dispatch({type:SELECT_JOB,payload:job}) }>
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
          </div>
              
      </Fragment>
    );
  };
