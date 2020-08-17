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
                        <span class = "time">6 hours ago</span>
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
