import React, { useRef, useState, useLayoutEffect } from 'react'
import { LOGIN_USER } from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import {IS_LOGGED_IN} from '../../actions/types';
import {parse} from 'query-string';

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
            if(redirectUrl)
               props.history.push("/"+redirectUrl);
            else
               props.history.push("/");
        }
        else
        {
            setMessage("The username or password you have entered is invalid");
        }
    }

    let googleUrl =  redirectUrl.length > 0 ? `/auth/google?redirectUrl=${redirectUrl}` : "/auth/google/";
    return (
        <div>
           {message}
           email: <input ref={emailInput} /> <br/>
           password: <input ref={passwordInput} /> <br/>
           <button onClick={handleSubmit}>Sign In</button>

           <a href={`${googleUrl}`}>Google SignIn</a>
        </div>
    )
}

