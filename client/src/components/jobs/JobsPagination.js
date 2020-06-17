import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import {GET_TOTAL_PAGINATION, GET_JOBS} from '../../graphql/queries';
import { FETCH_PAGINATION, FETCH_JOBS } from '../../actions/types';

export const JobsPagination = () => {

    const [active,setActive] = useState(1);
    const limit = parseInt(process.env.PAGINATION_LIMIT);

    const {pagination} = useSelector(state => state.pagination);
    const dispatch = useDispatch();
    
    const { data } = useQuery(GET_TOTAL_PAGINATION,{variables:{pageLimit:limit}});
    const getJobsQuery= useLazyQuery(GET_JOBS,{fetchPolicy:'cache-and-network'});

    const paginationClicked = (e,i) => {
        setActive(i);
        getJobsQuery[0]({variables:{pageNumber:i,pageLimit:limit}});
    }
    
    if(getJobsQuery[1].data)
    {
        dispatch({type:FETCH_JOBS,payload:getJobsQuery[1].data});
        getJobsQuery[1].data = undefined;
    }

    if(data && data.jobPagination && !pagination)
    {
        dispatch({type:FETCH_PAGINATION,payload:{pagination: data.jobPagination}});
    }

    let records = [];
    if(pagination)
    {
        for(let i=1;i<=pagination;i++)
        {
            records.push(<a href="#" className={active==i ? "active" : ""} onClick={(e) => paginationClicked(e,i)}>{i}</a>);  
        }
    }
    
    return (
        <div class="pagination">
            <a href="#">&laquo;</a>
            {records}
            <a href="#">&raquo;</a>
        </div>
    )
}