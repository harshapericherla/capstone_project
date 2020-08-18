import React, { useRef, useState }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { APPLY_JOB } from '../../graphql/mutations';
import { useMutation } from 'react-apollo';
import { SELECT_JOB } from '../../actions/types';
import '../../../assets/sass/applyjob.scss';

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
        <div class = "flex-body">
            <div class="validation-message">{message}</div>
            <div class = "apply-flex">
                <div class = "flex-group">
                <p>Job Name: </p><span>{selectedJob.name} </span></div>
                <div class = "flex-group">
                <p>Job Location: </p><span>{selectedJob.location}</span></div>
                <div class = "flex-group">
                <p>Job Type: </p><span>{selectedJob.type}</span></div>
                <input type="file" id ="btn1" ref={fileRef} />
            </div>
            <div class = "btn1">
            <button id= "btn1" onClick={applyJob}>Apply Job</button>
            </div>

        </div>
    );
}
