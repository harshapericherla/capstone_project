import React, { useRef, useState } from 'react'
import {REGISTER_USER} from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import '../../../assets/sass/login.scss';


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

            <div id = "box">
            <form action ="#">
                <h1>Welcome Back</h1>
                <div class ="form_details">
                <div class = "group">
                        <input type="text" id="form_control" name="name" ref={nameInput}/>
                        <label for="name">FullName</label>
                    </div>
                    <div class = "group">
                        <input type="email" id="form_control" name="email" ref={emailInput}/>
                        <label for="email">Email</label>
                    </div>
                    <div class = "group">
                        
                        <input type="password" id="form_control" name="password" ref={passwordInput}/>
                        <label for="password">Password</label>
                    </div>
                    <div class = "group">
                        
                        <input type="password" id="form_control" name="confirm password" ref={passwordInput}/>
                        <label for="confirm password">Confirm Password</label>
                    </div><br></br>
                    <input type="submit" id = "button" value="Submit" onClick={handleSubmit}/>
                </div>    
            </form>
        </div>
        <input type="submit" class="fa fa-google" value="Sign in with google"></input>

        </div>
    )
}
