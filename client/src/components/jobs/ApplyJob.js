import React, { useRef, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { APPLY_JOB } from '../../graphql/mutations';
import { useMutation } from 'react-apollo';
import { SELECT_JOB } from '../../actions/types';


export const ApplyJob = (props) => {
    
    const [applyJobM, { data }] = useMutation(APPLY_JOB);
    const selectedJob = useSelector(state => state.selectJob);
    const fileRef = useRef();
    const [tmpData,setTmpData] = useState(null);
    const dispatch = useDispatch();

    const applyJob = () => {
        const fileInput = fileRef.current;
        const file = fileInput.files[0];
        applyJobM({variables:{file:file,jobId:selectedJob._id}});
    }

    if(data && data != tmpData)
    {
        setTmpData(data);
        dispatch({type:SELECT_JOB,payload:{}});
        props.history.push("/");
    }

    return (
        <div>
            Job Name: {selectedJob.name} <br/>
            Job Location: {selectedJob.location} <br/>
            Job Type: {selectedJob.type} <br/>
            <input type="file" ref={fileRef} />
            <button onClick={applyJob}>Apply Job</button>
        </div>
    );
}
