import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {JOB_APPLIED} from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';

export const JobDetails = () => {
    
    const history = useHistory();
    const selectedJob = useSelector(state => state.selectJob);
    const [jobAppliedQ, {data}] = useLazyQuery(JOB_APPLIED,{fetchPolicy:"network-only"});
    const [selectedJobId,setSelectedJobId] = useState(""); 

    if(selectedJob && selectedJob._id && selectedJob._id != selectedJobId)
    {
        jobAppliedQ({variables:{jobId:selectedJob._id}});
        setSelectedJobId(selectedJob._id);
    }

    const applyNow = () => {

        let token = localStorage.getItem("token");
        if(token && token.length > 0)
           history.push("/applyjob");
        else
           history.push("/login?redirectUrl=applyjob");
    }

    let applyJobHtml = '';
    if (data && data.jobApplied && data.jobApplied.isApplied)
    {
        applyJobHtml = <button type="button">Applied</button>;
    }
    else
    {
        applyJobHtml = <button type="button" onClick={applyNow} >Apply Now</button>;
    }

    if(selectedJob && Object.keys(selectedJob).length > 0)
    {
        return(
            <div class = "showJobContent">
            <div id = "stickyContent">
                <span class = "jobName">
                    <h1>{selectedJob.name}</h1>
                </span>
                <span class = "companyName">
                    <p>{selectedJob.companyName}</p>
                </span>
                <span class = "location">
                    <span class="fa fa-map-marker"></span>
                    <p>{selectedJob.location}</p>
                </span>
            </div>
                
            <div id ="content2">
                <h2>Job Details</h2>
                <h3>Job Type</h3>
                <span class ="jobType">
                   <p>{selectedJob.type}</p>
                </span>
            </div>
            <hr></hr>
            <h3>Full Job Description</h3>
            <p>{selectedJob.description}</p>
            <h3>Responsibiltes:</h3>
            <ul>
                {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && selectedJob.responsibilities.map( (responsibility) => {
                    return <li>{responsibility}</li>
                })}
            </ul>
            <h3>Skills and Qualifications:</h3>
            <ul>
                {selectedJob.roles && selectedJob.roles.length > 0 && selectedJob.roles.map( (role) => {
                    return <li>{role}</li>
                })}
            </ul>
        
            <div class ="stickyContent">
                {applyJobHtml}
            </div>
        </div>
        );
    }
    return(
        <div></div>  
    );
}
