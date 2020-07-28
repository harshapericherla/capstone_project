import React, { useLayoutEffect } from 'react';
import { JOBS_APPLIED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';

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
                   <div class="appliedJob">
                      <p>{appliedJob.job.name}</p>
                   </div>
                );
        }));
    }
    else if(data && data.appliedJobs && data.appliedJobs.length == 0)
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
