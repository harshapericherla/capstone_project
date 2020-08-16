import React, { useLayoutEffect } from 'react';
import { JOBS_APPLIED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import '../../../assets/sass/list.scss';


export const JobsApplied = () => {

    const [jobsAppliedQ, { data }] = useLazyQuery(JOBS_APPLIED,{fetchPolicy:"network-only"});
    useLayoutEffect(() => {
        jobsAppliedQ({variables:{}});;
    },[]);

    let innerHtml = '';
    if(data && data.appliedJobs && data.appliedJobs.jobs && data.appliedJobs.jobs.length > 0)
    {
        innerHtml = [];
        innerHtml.push(data.appliedJobs.jobs.map((appliedJob) => {
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
                            <p>{appliedJob.job.companyName}</p>
                            <div class = "location">
                            <span class="fa fa-location-arrow"></span>
                            <p>{appliedJob.job.location}</p>
                            </div>
                        </div>
                        </div>
                        <div class ="short-description">
                        <span class = "role">{appliedJob.job.name}</span>
                        <span class = "desc">{appliedJob.job.description}</span>
                        </div>
                        <hr></hr>
                        <div class= "type">
                        <span class ="fa fa-suitcase"></span>
                        <span class = "jobtype">{appliedJob.job.type}</span>
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
    else if(data && data.appliedJobs && data.appliedJobs.jobs.length == 0)
    {
        innerHtml = "No jobs applied";
    }
    else 
    {
        innerHtml = "Loading...";
    }
    return (
        <div>{innerHtml}</div>
    );
}
