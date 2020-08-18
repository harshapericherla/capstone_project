import React, { useLayoutEffect } from 'react';
import { JOBS_APPLIED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import '../../../assets/sass/list.scss';


export const JobsApplied = () => {

    const [jobsAppliedQ, { data }] = useLazyQuery(JOBS_APPLIED,{fetchPolicy:"no-cache"});
    useLayoutEffect(() => {
        jobsAppliedQ({variables:{}});;
    },[]);

    let innerHtml = '';
    let colors = ["#CD5C5C","#90EE90","#FFA07A","#778899","#BA55D3","#7B68EE","#9370DB","#C71585","#191970","#6B8E23","#DB7093","#FA8072"];
    const randomColor = (firstCodeArg,secondCodeArg) => {
      
      let code = firstCodeArg + secondCodeArg;
      let pos = code % colors.length - 1;
      return colors[pos];
    }

    const displayAppliedTime = (appliedDate) => {
        let currentDate = new Date();
        let appliedDateUtc = new Date(appliedDate);
        if(appliedDate)
        {
            let diffTime = Math.abs(currentDate - appliedDateUtc);
            let minutes = Math.floor(diffTime / 60000);
            if(minutes >= 60)
            {
                let hours = Math.floor(minutes / 60);   
                if(hours >= 24)
                {
                    let days = Math.floor(hours / 24);  
                    if(days == 1)
                        return `Applied ${days} day ago`;
                    else
                        return `Applied ${days} days ago`;
                }
                if(hours == 1)
                    return `Applied ${hours} hour ago`;
                else
                     return `Applied ${hours} hours ago`;
            }
            if(minutes < 1)
            {
               let seconds = Math.floor(diffTime / 1000);
               return `Applied ${seconds} seconds ago`;
            }
            else if(minutes == 1)
               return `Applied ${minutes} minute ago`;
            else
               return `Applied ${minutes} minutes ago`;
        }
        return " ";
    }

    if(data && data.appliedJobs && data.appliedJobs.jobs && data.appliedJobs.jobs.length > 0)
    {
        innerHtml = [];
        innerHtml.push(data.appliedJobs.jobs.map((appliedJob) => {
            
            return (
                <div>
                    <div class = "listContent" >
                    <div id = "cards1">
                    <div class = "flex-card1">
                        <div id = "circle">
                        <div class = "circle" style={{"background-color": randomColor(appliedJob.job.companyName.charCodeAt(0),appliedJob.job.companyName.charCodeAt(1))}}>
                           <span>{appliedJob.job.companyName.substring(0,1)}</span>
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
                        <span class = "time">{displayAppliedTime(appliedJob.appliedDate)}</span>
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
        <div id = "heading">{innerHtml}</div>
    );
}
