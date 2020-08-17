import React, { useLayoutEffect } from 'react'
import { GET_APPLICANTS } from '../../graphql/queries';
import { useLazyQuery } from 'react-apollo';

export const ShowApplicants = (props) => {

    const [jobsQ, {data }] = useLazyQuery(GET_APPLICANTS,{fetchPolicy:"network-only"});

    useLayoutEffect(() => {
          let {jobId} = props.match.params;
          jobsQ({variables:{jobId}});
    },[]);


    let innerHtml = '';
    if(data && data.postedJobsUsers && data.postedJobsUsers.users && data.postedJobsUsers.users.length > 0)
    {
        innerHtml = [];
        innerHtml.push(data.postedJobsUsers.users.map((user) => {
            return (
                <div>
                    <div class = "listContent" >
                        <div id = "cards">
                            <div class = "flex-card">
                                {user.user.name}
                                <a href={`/download?fileName=${user.resumeLink}`} target="_blank">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }));
    }
    else if(data && data.postedJobsUsers && data.postedJobsUsers.users.length == 0)
    {
        innerHtml = "No Applicants";
    }
    else 
    {
        innerHtml = "Loading...";
    }
    return (
       <div>{innerHtml}</div>
    )
  };
