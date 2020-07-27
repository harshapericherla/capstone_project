import React, { useRef, useState } from 'react';
import { CREATE_JOB } from '../../graphql/mutations';
import { useMutation } from 'react-apollo';


export const CreateJob = (props) => {

    const [createJobM, { data }] = useMutation(CREATE_JOB);

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
         createJobM({variables:{createJobInput:{name,location,type,description,companyName,roles,responsibilities}}});
    }

    if(data && data != tmpData)
    {
        setTmpData(data);
        props.history.push("/");
    }

    return(
        <div>
            Name: <input ref={nameInput} /> <br/>
            Location: <input ref={locationInput} /> <br/>
            Type: <select ref={typeInput}>
                        <option value="Part Time">Part Time</option>
                        <option value="Full Time">Full Time</option>
                    </select> <br/>
            Description: <input ref={descInput} />  <br/>
            Company: <input ref={companyInput} />  <br/>
            Roles: <input ref={rolesInput} />  <br/>
            Responsibilities: <input ref={responsibilitiesInput} />  <br/>
            <button onClick={handleSubmit}>submit</button>
        </div>  
    );
}
