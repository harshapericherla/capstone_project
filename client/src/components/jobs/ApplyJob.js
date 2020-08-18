import React, { useRef, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { APPLY_JOB } from '../../graphql/mutations';
import { useMutation } from 'react-apollo';
import { SELECT_JOB } from '../../actions/types';


export const ApplyJob = (props) => {
    
    const [applyJobM, { data }] = useMutation(APPLY_JOB);
    const [message, setMessage] = useState("");
    const selectedJob = useSelector(state => state.selectJob);
    const fileRef = useRef();
    const [tmpData,setTmpData] = useState(null);
    const dispatch = useDispatch();
   
    const applyJob = () => {
        const fileInput = fileRef.current;
        const file = fileInput.files[0];
        let validationArr = validate(file);
        if(validationArr.length > 0)
            setMessage(validationArr);
        else
            applyJobM({variables:{file:file,jobId:selectedJob._id}});
    }

    const validate = (file) => {
        let validationArr = [];
        if(!file)
        {
            validationArr.push("Please upload a file");
        }
        if(file && file.size > 30000)
        {
            validationArr.push("Please enter file size below 30kb");
        }
        return validationArr;
    }

    if(data && data != tmpData)
    {
        setTmpData(data);
        dispatch({type:SELECT_JOB,payload:{}});
        props.history.push("/");
    }

    return (
        <div>
            <div class="validation-message">{message}</div>
            Job Name: {selectedJob.name} <br/>
            Job Location: {selectedJob.location} <br/>
            Job Type: {selectedJob.type} <br/>
            <input type="file" ref={fileRef} />
            <button onClick={applyJob}>Apply Job</button>
        </div>
    );
}
