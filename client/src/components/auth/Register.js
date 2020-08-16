import React, { useRef, useState } from 'react'
import {REGISTER_USER} from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import '../../../assets/sass/login.scss';


export const Register = (props) => {


    const [registerUserQ, { data }] = useMutation(REGISTER_USER);
    const [tmpData,setTmpData] = useState(false);
    const [message, setMessage] = useState("");

    const nameInput = useRef("");
    const passwordInput = useRef("");
    const confirmPasswordInput = useRef("");
    const emailInput = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = nameInput.current.value;
        let password = passwordInput.current.value;
        let confirmPassword = confirmPasswordInput.current.value;
        let email = emailInput.current.value;

        let validationArr = validate(name,email,password,confirmPassword);
        if(validationArr && validationArr.length > 0)
        {
            setMessage(validationArr);
        }
        else
        {
            registerUserQ({variables:{userInput:{name,password,email}}});
        }
    }


    const validate = (name,email,password,confirmPassword) => {
        
        let validationArr = [];
        let emailRegx = /\S+@\S+\.\S+/;

        if(!name || name.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter name</div>);
        }
        if(!email || email.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter email</div>);
        }
        if(email && !emailRegx.test(email))
        {
            validationArr.push(<div className="validation">Please enter valid email format Ex: xxxx@xxx.xxx</div>);
        }

        if(!password || password.trim() == "")
        {
            validationArr.push(<div className="validation">Please enter password</div>);
        }
        if(password && password !== confirmPassword)
        {
            validationArr.push(<div className="validation">Please make sure that password and confirm password match</div>);
        }
        return validationArr;
    };

    if(data && data.register && data != tmpData)
    {
        setTmpData(data);
        if(data.register.isRegistered)
        {
            props.history.push("/login?message=registerSuccess");
        }
        else
        {
            setMessage("User with this email is already registered");
        }
    }

    return (
        <div class = "welcome">
            <div class="validation-message">{message}</div>
            <div id = "box">
                <h1>Register</h1>
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
                        
                        <input type="password" id="form_control" name="confirm password" ref={confirmPasswordInput}/>
                        <label for="confirm password">Confirm Password</label>
                    </div><br></br>
                    <input type="submit" id = "button" value="Submit" onClick={(e) => handleSubmit(e)}/>
                </div>    
            </div>
        </div>
    )
}
