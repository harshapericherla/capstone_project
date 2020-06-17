import {combineReducers} from 'redux';
import jobsReducer from './jobsReducer';
import paginateReducer from './paginateReducer';

export default combineReducers({
    jobs:jobsReducer,
    pagination:paginateReducer
});