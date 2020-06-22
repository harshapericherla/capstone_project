import {combineReducers} from 'redux';
import jobsReducer from './jobsReducer';
import paginateReducer from './paginateReducer';
import searchReducer from './searchReducer';
import selectJobReducer from './selectJobReducer';

export default combineReducers({
    jobs:jobsReducer,
    pagination:paginateReducer,
    searchFilter: searchReducer,
    selectJob:selectJobReducer
});