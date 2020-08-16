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

    const handleSubmit = () => {
        let password = passwordInput.current.value;
        let email = emailInput.current.value;
        loginUserQ({variables:{userInput:{password,email}}});
    }

    useLayoutEffect(() => {
        let params = parse(props.location.search);
        if(params.redirectUrl)
        {
            setRedirectUrl(params.redirectUrl);
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

    let googleUrl =  redirectUrl.length > 0 ? `/auth/google?redirectUrl=${redirectUrl}` : "/auth/google/";
    return (
        <div class = "welcome">
           {message}
           <div id = "box">
                <h1>Welcome Back</h1>
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
        <input type="submit" class="fa fa-google" value="Sign in with google"></input>

           <a href={`${googleUrl}`}>Google SignIn</a>
        </div>
    )
}

