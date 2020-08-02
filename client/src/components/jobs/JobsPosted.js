import React, { useLayoutEffect } from 'react';
import { JOBS_POSTED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import '../../../assets/sass/list.scss';


export const JobsPosted = () => {

    const [jobsPostedQ, { data }] = useLazyQuery(JOBS_POSTED,{fetchPolicy:"network-only"});
    useLayoutEffect(() => {
        jobsPostedQ({variables:{}});;
    },[]);

    let innerHtml = '';

    console.log(data);
    if(data  && data.jobsPosted.jobs && data.jobsPosted.jobs.length > 0)
    {
        innerHtml = [];
        innerHtml.push(data.jobsPosted.jobs.map((postedJob) => {
            return (
                <div>
                    <div class = "listContent" >
                    <div id = "cards">
                    <div class = "flex-card">
                        <div id = "circle">
                        <div class = "circle">
                            <span>A</span>
                        </div>
                        <div class = "name">
                            <p>{postedJob.companyName}</p>
                            <div class = "location">
                            <span class="fa fa-location-arrow"></span>
                            <p>{postedJob.location}</p>
                            </div>
                        </div>
                        </div>
                        <div class ="short-description">
                        <span class = "role">{postedJob.name}</span>
                        <span class = "desc">{postedJob.description}</span>
                        </div>
                        <hr></hr>
                        <div class= "type">
                        <span class ="fa fa-suitcase"></span>
                        <span class = "jobtype">{postedJob.type}</span>
                        <span class="fa fa-clock-o"></span>
                        <span class = "time">6 hours ago</span>
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
                );
        }));
    }
    else if(data && data.jobsPosted && data.jobsPosted.jobs.length == 0)
    {
        innerHtml = "No jobs Posted";
    }
    else 
    {
        innerHtml = "Loading...";
    }
    return (
        <div>{innerHtml}</div>
    );
}
