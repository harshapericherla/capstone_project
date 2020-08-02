import '../../../assets/sass/list.scss';
import '../../../assets/sass/search.scss';
import '../../../assets/sass/details.scss';
import {JobDetails} from './JobDetails';
import {JobsList} from './JobsList';
import React,{Fragment, useLayoutEffect} from 'react';
import {Search} from './Search';
import { JobsPagination } from './JobsPagination';
import {parse} from 'query-string';
import { useDispatch } from 'react-redux';
import { IS_LOGGED_IN, SELECT_JOB } from '../../actions/types';

export const Jobs = (props) => {


    const dispatch = useDispatch();
    useLayoutEffect(() => {
        let params = undefined;
        if(props.location.search)
        {
            params = parse(props.location.search);
            if(params.token)
            {
                let token = decodeURIComponent(params.token);
                localStorage.setItem('token',token);
            }
        }

        let token = localStorage.getItem("token");
        if(token && token.length > 0)
        {
            dispatch({type:IS_LOGGED_IN,payload:{isLoggedIn:true}});
            console.log(params);
            if(params && params.redirectUrl)
               props.history.push("/"+params.redirectUrl);
            else
               props.history.push("/");
        }
        dispatch({type:SELECT_JOB,payload:{}});
    },[]);

    return(
        <Fragment>
            <Search/>
            <div id ="flexContent">
                <div class = "flexRow">
                    <div id = "pagination">
                        <JobsList {...props} />
                    </div>
                    <JobDetails />    
                </div>
                <div id = "pagination" class = "abc">
                    <JobsPagination/>
                </div>
            </div>
        </Fragment>
    );
}

