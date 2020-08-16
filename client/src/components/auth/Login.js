import React, { useRef, useState, useLayoutEffect } from 'react'
import { LOGIN_USER } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import {IS_LOGGED_IN} from '../../actions/types';
import {parse} from 'query-string';
import '../../../assets/sass/login.scss';


export default function Login(props) {

    const dispatch = useDispatch();
    const [redirectUrl,setRedirectUrl] = useState(""); 
    const [loginUserQ, { data }] = useMutation(LOGIN_USER);
    const [message,setMessage] = useState("");
    const passwordInput = useRef("");
    const emailInput = useRef("");
    const [tmpData,setTmpData] = useState(false);

    const signInWithGoogle = (e) => {
        e.preventDefault();
        let googleUrl =  redirectUrl.length > 0 ? `/auth/google?redirectUrl=${redirectUrl}` : "/auth/google/";
        window.location.href = googleUrl;
    }

    const handleSubmit = () => {
        let password = passwordInput.current.value;
        let email = emailInput.current.value;
        let validationMsg = [];
        if(!email || email.trim() == "")
        {
            validationMsg.push(<div className="validation">Please enter email to login</div>);
        }
        if(!password || password.trim() == "")
        {
           validationMsg.push(<div className="validation">Please enter password to login</div>);
        }

        if(validationMsg && validationMsg.length > 0)
        {
            setMessage(validationMsg);
        }
        else
        {
            loginUserQ({variables:{userInput:{password,email}}});
        }
    }

    useLayoutEffect(() => {
        let params = parse(props.location.search);
        if(params.redirectUrl)
        {
            setRedirectUrl(params.redirectUrl);
        }
        if(params.message && params.message == "registerSuccess")
        {
            setMessage("Registration Successful, Login with new credentials");
        }
    },[])

    if(data && data.login && data != tmpData)
    {
        setTmpData(data);
        let token = data.login.token;
        if(token.length > 0)
        {
            localStorage.setItem('token',token);
            dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:true}});
            window.location.href = "/";
        }
        else
        {
            setMessage("The username or password you have entered is invalid");
        }
    }

    
    return (
        <div class = "welcome">
            <div class="validation-message">
                {message}
            </div>
           <div id = "box">
                <h1>Sign In</h1>
                <div class ="form_details">
                    <div class = "group">
                        <input type="email" id="form_control" name="email" ref={emailInput} ></input>
                        <label for="email">Email</label>
                    </div>
                    <div class = "group">
                        <input type="password" id="form_control" name="password" ref={passwordInput}></input>
                        <label for="password">Password</label>
                    </div><br></br>
                    <input type="submit" id = "button" value="Submit" onClick={handleSubmit}></input>
                </div>    
        </div>
         <input type="submit" class="fa fa-google" value="Sign in with google" onClick={(e) => signInWithGoogle(e)}></input>
        </div>
    )
}

