import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_JOBS} from '../../graphql/queries';
import {FETCH_JOBS, FETCH_PAGINATION, SELECT_JOB } from '../../actions/types';

export const JobsPagination = () => {

    const [tmpData,setTmpData] = useState(false);
    const limit = parseInt(process.env.PAGINATION_LIMIT);

    const {pagination,pageActive} = useSelector(state => state.pagination);
    const {filter} = useSelector(state => state.searchFilter)
    const dispatch = useDispatch();

    const [jobsQ, {data }] = useLazyQuery(GET_JOBS,{fetchPolicy:"no-cache"});


    const paginate= (e,direction) => {

          e.preventDefault();
          let activePage = pageActive ? pageActive : 1;
          let updatedPageNum;
          
          if(direction === "left" && activePage > 0)
          { 
             updatedPageNum =  activePage - 1;                 
          }
          else if(direction === "right" && activePage < pagination)
          {
             updatedPageNum =  activePage + 1;   
          }
          if(updatedPageNum && updatedPageNum != activePage)
          {
              paginationClicked(e,updatedPageNum);
          }
    }

    const paginationClicked = (e,i) => {
        let {searchValue,searchLocation} = filter;

        setTmpData({});
        dispatch({type:FETCH_PAGINATION,payload:{pagination,pageActive:i}});
        searchValue = searchValue ? searchValue : "";
        searchLocation = searchLocation ? searchLocation : "";
        jobsQ({variables:{searchInput:{pageNum:i,pageLimit:limit,searchTxt:searchValue,searchLocation:searchLocation}}});
    }
 
    if(data != tmpData && data && data.jobs)
    {
        setTmpData(data);
        dispatch({type:FETCH_JOBS,payload:data.jobs});
        dispatch({type:SELECT_JOB,payload:{}});
    }

    let records = [];
    let active = pageActive ? pageActive : 1;
    if(pagination)
    {
        for(let i=1;i<=pagination;i++)
        {
            records.push(<a href="#" className={active==i ? "active" : ""} onClick={(e) => paginationClicked(e,i)}>{i}</a>);  
        }
    }
    
    return (
        <div class="pagination">
            <a href="#" onClick={(e) => paginate(e,"left")}>&laquo;</a>
            {records}
            <a href="#" onClick={(e) => paginate(e,"right")}>&raquo;</a>
        </div>
    )
}