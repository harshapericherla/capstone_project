import '../../assets/sass/list.scss';
import {JobDetails} from './JobDetails';
import {JobsList} from './JobsList';
import React from 'react';

export const Jobs = () => {
    return(
        <div id ="flexContent">
            <JobsList />
            <JobDetails />
        </div>
    );
}
