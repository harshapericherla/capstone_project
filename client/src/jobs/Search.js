import React, {useState } from 'react';
import {GET_JOBS,SEARCH_JOBS} from '../graphql/queries';
import { ApolloConsumer, useLazyQuery } from 'react-apollo';

export const Search = ({client}) => {

    const [jobs,setJobs] = useState({});
    const [searchValue,setSearchValue] = useState("");
    const [searchQ, {data }] = useLazyQuery(SEARCH_JOBS,{fetchPolicy:'cache-and-network'});

    const searchJobs = () => {
        searchQ({variables:{searchText:searchValue}});
    }

    const updateCache = ({searchJobs}) => {
        if(jobs != searchJobs)
        {
            setJobs(searchJobs);
            client.writeQuery({
                query:GET_JOBS,
                data: {
                  jobs: searchJobs
                }
            });
        }
    }

    if(data && data.searchJobs)
    {
        updateCache(data);
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
            <ApolloConsumer>
                {client => (
                    <button type="button" onClick={() => searchJobs(client)}>Find Jobs</button>
                )}
            </ApolloConsumer>
        </div>
        
       
    );
}
