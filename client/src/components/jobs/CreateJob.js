import React, { useRef, useState } from 'react';
import { CREATE_JOB } from '../../graphql/mutations';
import { useMutation } from 'react-apollo';


export const CreateJob = (props) => {

    const [createJobM, { data }] = useMutation(CREATE_JOB);
    const [message, setMessage] = useState("");

    const nameInput = useRef("");
    const locationInput = useRef("");
    const typeInput = useRef("");
    const descInput = useRef("");
    const companyInput = useRef("");
    const rolesInput = useRef("");
    const responsibilitiesInput = useRef("");
    const [tmpData,setTmpData] = useState(false);

    const handleSubmit = () => {
         let name = nameInput.current.value;
         let location = locationInput.current.value;
         let type = typeInput.current.value;
         let description = descInput.current.value;
         let companyName = companyInput.current.value;
         let roles = rolesInput.current.value;
         let responsibilities = responsibilitiesInput.current.value;

         let validationArr = validate(name,location,type,description,companyName,roles,responsibilities);
         if(validationArr.length > 0)
         {
            setMessage(validationArr);
         }
         else
         {
            createJobM({variables:{createJobInput:{name,location,type,description,companyName,roles,responsibilities}}});
         }
    }

    const validate = (name,location,type,description,companyName,roles,responsibilities) => {
        
        let validationArr = [];

        if(!name || name.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter name</div>);
        }
        if(!location || location.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter location</div>);
        }
        if(!type || type.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter type</div>);
        }
        if(!description || description.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter description</div>);
        }
        if(!companyName || companyName.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter company name</div>);
        }
        if(!roles || roles.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter roles</div>);
        }
        if(!responsibilities || responsibilities.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter responsibilities</div>);
        }
        
        return validationArr;
    };


    if(data && data != tmpData)
    {
        setTmpData(data);
        props.history.push("/");
    }

    return(

        <div class = "welcome">
            <div class="validation-message">{message}</div>
            <div id = "box">
                <h1>Post a Job</h1>
                <div class ="form_details">
                <div class = "group">
                        <input type="text" id="form_control" name="name" ref={nameInput}/>
                        <label for="name">Name</label>
                    </div>
                    <div class = "group">
                        <input type="text" id="form_control" name="location" ref={locationInput}/>
                        <label for="location">Location</label>
                    </div>
                    Type: <select ref={typeInput}>
                        <option value="Part Time">Part Time</option>
                        <option value="Full Time">Full Time</option>
                    </select> <br/>
                    <div class = "group">
                        <textarea id="form_control" name="desc" rows="4" cols="50" ref={descInput}/>
                        <label for="desc">Description</label>
                    </div>
                    <div class = "group">
                        
                        <input type="text" id="form_control" name="companyname" ref={companyInput}/>
                        <label for="companyname">Company</label>
                    </div>
                    
                    <div class = "group">
                        <textarea id="form_control" name="roles" rows="4" cols="50" ref={rolesInput}/>
                        <label for="roles">Roles</label>
                    </div>
                    <div class = "group">
                        <textarea id="form_control" name="responsibiltes" rows="4" cols="50" ref={responsibilitiesInput}/>
                        <label for="responsibiltes">Responsibilities</label>
                    </div>
                    
                    <br></br>
                    <button onClick={handleSubmit}>submit</button>
                </div>    
            </div>
        </div>
    );
}
