import '../../../assets/sass/list.scss';
import '../../../assets/sass/search.scss';
import '../../../assets/sass/details.scss';
import {JobDetails} from './JobDetails';
import {JobsList} from './JobsList';
import React,{Fragment} from 'react';
import {Search} from './Search';
import { JobsPagination } from './JobsPagination';


export const Jobs = () => {
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

