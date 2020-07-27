
import { NavLink, useHistory } from 'react-router-dom';
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IS_LOGGED_IN, SELECT_JOB } from '../actions/types';

export default function Header(props) {

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.auth);
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:false}});
        dispatch({type:SELECT_JOB,payload:{}});
        history.push("/");
    }

    let innerHtml = "";
    if(isLoggedIn)
    {
       innerHtml = 
                <Fragment>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/createjob">Post a Job</NavLink>
                    <NavLink to="/appliedjobs">Applied Jobs</NavLink>
                    <button onClick={logout}>Logout</button>
                </Fragment>;
    }
    else
    {
        innerHtml = 
        <Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </Fragment>;
    }

    return (
            <div>
               {innerHtml}
            </div>
    )
}

