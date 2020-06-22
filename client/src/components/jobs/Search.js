import React, {useState } from 'react';
import { useLazyQuery } from 'react-apollo';
import {FETCH_JOBS, FETCH_PAGINATION, SEARCH_FILTER, SELECT_JOB} from '../../actions/types';
import { useDispatch } from 'react-redux';
import { GET_JOBS } from '../../graphql/queries';

export const Search = () => {

    const limit = parseInt(process.env.PAGINATION_LIMIT);
    const [searchValue,setSearchValue] = useState("");
    const [searchLocation,setSearchLocation] = useState("");
    const [tmpData,setTmpData] = useState(false);
    const [searchQ, {data }] = useLazyQuery(GET_JOBS);
    const dispatch = useDispatch();

    const searchJobs = () => {
        searchQ({variables:{searchInput:{pageNum:1,pageLimit:limit,searchTxt:searchValue,searchLocation:searchLocation}}});
        setTmpData({});
    }

    if(tmpData != data && data && data.jobs)
    {
        setTmpData(data);
        dispatch({type:FETCH_JOBS,payload:data.jobs});
        dispatch({type:FETCH_PAGINATION,payload:{pagination:data.jobs.pages,pageActive:1}});
        dispatch({type:SEARCH_FILTER,payload:{filter:{searchValue,searchLocation}}});
        dispatch({type:SELECT_JOB,payload:{}});
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
                <input type="text" name="search" autocomplete = "off" placeholder="city or province" onChange={(event) => setSearchLocation(event.target.value)} value={searchLocation}></input>
            </div>
            <button type="button" onClick={() => searchJobs()}>Find Jobs</button>
        </div>
        
       
    );
}
