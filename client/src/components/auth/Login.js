import React, { useRef, useState } from 'react'
import {LOGIN_USER} from '../../graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import {IS_LOGGED_IN} from '../../actions/types';

export default function Login(props) {

    const dispatch = useDispatch();
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

    if(data && data.login && data != tmpData)
    {
        setTmpData(data);
        let token = data.login.token;
        if(token.length > 0)
        {
            localStorage.setItem('token',token);
            dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:true}});
            props.history.push("/");
        }
        else
        {
            setMessage("The username or password you have entered is invalid");
        }
    }

    return (
        <div>
           {message}
           email: <input ref={emailInput} /> <br/>
           password: <input ref={passwordInput} /> <br/>
           <button onClick={handleSubmit}>Sign In</button>

           <a href="/auth/google">Google SignIn</a>
        </div>
    )
}

