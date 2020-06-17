import React, {useState } from 'react';
import {SEARCH_JOBS} from '../../graphql/queries';
import { useLazyQuery } from 'react-apollo';
import {FETCH_JOBS} from '../../actions/types';
import { useDispatch } from 'react-redux';

export const Search = () => {

    const [searchValue,setSearchValue] = useState("");
    const [searchQ, {data }] = useLazyQuery(SEARCH_JOBS,{fetchPolicy:'network-only'});
    const dispatch = useDispatch();

    const searchJobs = () => {
        searchQ({variables:{searchText:searchValue}});
    }
    
    if(data && data.searchJobs)
    {
        dispatch({type:FETCH_JOBS,payload:{jobs:data.searchJobs}});
    }

    return(
        <div id = "search">
            <div class = "search">
                <h2>What</h2>
                <h4>job title,company or keywords</h4>
                <span class="fa fa-search"></span>
                <input type="text" name="search" autocomplete = "off" onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="job title,company or keywords"></input>
            </div>
            <div class = "search">
                <h2>Where</h2>
                <h4>city or province</h4>
                <span class="fa fa-map-marker"></span>
                <input type="text" name="search" autocomplete = "off" placeholder="city or province"></input>
            </div>
            <button type="button" onClick={() => searchJobs()}>Find Jobs</button>
        </div>
        
       
    );
}
