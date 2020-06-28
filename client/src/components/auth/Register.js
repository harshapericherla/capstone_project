import React, { useRef, useState } from 'react'
import {REGISTER_USER} from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';

export const Register = () => {


    const [registerUserQ, { data }] = useMutation(REGISTER_USER);
    const [tmpData,setTmpData] = useState(false);
    const [message, setMessage] = useState("");

    const nameInput = useRef("");
    const passwordInput = useRef("");
    const emailInput = useRef("");

    const handleSubmit = () => {
        let name = nameInput.current.value;
        let password = passwordInput.current.value;
        let email = emailInput.current.value;
        registerUserQ({variables:{userInput:{name,password,email}}});
    }

    if(data && data.register && data != tmpData)
    {
        setTmpData(data);
        if(data.register.isRegistered)
        {
            setMessage("Registration Successful");
        }
        else
        {
            setMessage("User with this email is already registered");
        }
    }

    return (
        <div>
            {message}
            Name: <input ref={nameInput} /> <br/>
            password: <input ref={passwordInput} /> <br/>
            email: <input ref={emailInput} /> <br/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
