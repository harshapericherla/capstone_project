import React, { useLayoutEffect } from 'react';
import { JOBS_POSTED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';
import '../../../assets/sass/list.scss';
import { useHistory } from 'react-router-dom';


export const JobsPosted = () => {

    const history = useHistory();
    const [jobsPostedQ, { data }] = useLazyQuery(JOBS_POSTED,{fetchPolicy:"no-cache"});
    useLayoutEffect(() => {
        jobsPostedQ({variables:{}});;
    },[]);

    const showApplicants = (jobId) => {
         history.push(`/listofapplicants/${jobId}`);        
    }

    let innerHtml = '';
    let colors = ["#CD5C5C","#90EE90","#FFA07A","#778899","#BA55D3","#7B68EE","#9370DB","#C71585","#191970","#6B8E23","#DB7093","#FA8072"];
    const randomColor = (firstCodeArg,secondCodeArg) => {
      
      let code = firstCodeArg + secondCodeArg;
      let pos = code % colors.length - 1;
      return colors[pos];
    }

    const displayPostedTime = (postedDate) => {

        let currentDate = new Date();
        let postedDateUtc = new Date(postedDate);
        if(postedDate)
        {
            let diffTime = Math.abs(currentDate - postedDateUtc);
            let minutes = Math.floor(diffTime / 60000);
            if(minutes >= 60)
            {
                let hours = Math.floor(minutes / 60);   
                if(hours >= 24)
                {
                    let days = Math.floor(hours / 24);  
                    if(days == 1)
                        return `Posted ${days} day ago`;
                    else
                        return `Posted ${days} days ago`;
                }
                if(hours == 1)
                    return `Posted ${hours} hour ago`;
                else
                     return `Posted ${hours} hours ago`;
            }
            if(minutes < 1)
            {
               let seconds = Math.floor(diffTime / 1000);
               return `Posted ${seconds} seconds ago`;
            }
            else if(minutes == 1)
               return `Posted ${minutes} minute ago`;
            else
               return `Posted ${minutes} minutes ago`;
        }
        return " ";
    }

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
                        <div class = "circle" style={{"background-color": randomColor(postedJob.companyName.charCodeAt(0),postedJob.companyName.charCodeAt(1))}}>
                           <span>{postedJob.companyName.substring(0,1)}</span>
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
                        <span class = "time">{displayPostedTime(postedJob.postedDate)}</span>
                        </div>
                        <div id="applicantsBtn" onClick={() => showApplicants(postedJob._id)}>Show Applicants</div>
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
