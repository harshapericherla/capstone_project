import React, { useLayoutEffect } from 'react'
import { GET_APPLICANTS } from '../../graphql/queries';
import { useLazyQuery } from 'react-apollo';
import '../../../assets/sass/applicants.scss';



export const ShowApplicants = (props) => {

    const [jobsQ, {data }] = useLazyQuery(GET_APPLICANTS,{fetchPolicy:"no-cache"});

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
                    <table>
                    <tr>
                        <th>Name</th>
                        <th>Resume</th>
                    </tr>
                    <tr>
                        <td>{user.user.name}</td>
                        <td><a href={`/download?fileName=${user.resumeLink}`} target="_blank">Download</a></td>
                    </tr>
                    </table>
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
