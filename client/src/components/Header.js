
import { NavLink, useHistory } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IS_LOGGED_IN, SELECT_JOB } from '../actions/types';
import '../../assets/sass/header.scss';


export default function Header(props) {

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.auth);
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:false}});
        dispatch({type:SELECT_JOB,payload:{}});
        window.location.href = "/";
    }

    let innerHtml = "";
    if(isLoggedIn)
    {
       innerHtml = 
                <Fragment>
                    <div class = "head">
                        <h1>Jobs Board</h1>
                        <div class = "nav">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/createjob">Post a Job</NavLink>
                            <NavLink to="/appliedjobs">Applied Jobs</NavLink>
                            <NavLink to="/jobsPosted">Jobs Posted</NavLink>
                        </div>
                        <button id = "btn" onClick={logout}>Logout</button>
                    </div>
                </Fragment>;
    }
    else
    {
        innerHtml = 
        <Fragment>
            <div class = "head">
                <h1>Jobs Board</h1>
                <div class = "nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
            </div>
        </Fragment>;
    }

    return (
            <div>
               {innerHtml}
            </div>
    )
}

