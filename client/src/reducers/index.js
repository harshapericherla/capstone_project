import {combineReducers} from 'redux';
import jobsReducer from './jobsReducer';
import paginateReducer from './paginateReducer';
import searchReducer from './searchReducer';
import selectJobReducer from './selectJobReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    jobs:jobsReducer,
    pagination:paginateReducer,
    searchFilter: searchReducer,
    selectJob:selectJobReducer
});