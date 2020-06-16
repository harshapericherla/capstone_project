import '../../assets/sass/list.scss';
import '../../assets/sass/search.scss';
import '../../assets/sass/details.scss';
import {JobDetails} from './JobDetails';
import {JobsList} from './JobsList';
import React,{Fragment} from 'react';
import {Search} from './Search';
import { withApollo } from 'react-apollo';

export const Jobs = () => {

    const SearchApollo = withApollo(Search);
    
    return(
        <Fragment>
            <SearchApollo/>
            <div id ="flexContent">
                <JobsList />
                <JobDetails />
            </div>
        </Fragment>
    );
}

