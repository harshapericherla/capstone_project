
import { NavLink, useHistory } from 'react-router-dom';
import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IS_LOGGED_IN } from '../actions/types';

export default function Header(props) {

    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector(state => state.auth);
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:false}});
        history.push("/");
    }

    let innerHtml = "";
    if(isLoggedIn)
    {
       innerHtml = 
                <Fragment>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/createjob">Post a Job</NavLink>
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

