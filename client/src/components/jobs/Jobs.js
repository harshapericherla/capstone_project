import '../../../assets/sass/list.scss';
import '../../../assets/sass/search.scss';
import '../../../assets/sass/details.scss';
import {JobDetails} from './JobDetails';
import {JobsList} from './JobsList';
import React,{Fragment, useLayoutEffect} from 'react';
import {Search} from './Search';
import { JobsPagination } from './JobsPagination';
import {parse} from 'query-string'
import { useDispatch } from 'react-redux';
import { IS_LOGGED_IN } from '../../actions/types';

export const Jobs = (props) => {


    const dispatch = useDispatch();
    useLayoutEffect(() => {

        if(props.location.search)
        {
            let params = parse(props.location.search);
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
            props.history.push("/");
        }

    },[]);

    return(
        <Fragment>
            <Search/>
            <div id ="flexContent">
                <div class = "flexRow">
                    <div id = "pagination">
                        <JobsList />
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

