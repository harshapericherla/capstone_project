import {SEARCH_FILTER} from '../actions/types';

export default function(state = [],action){
    switch(action.type){
        case SEARCH_FILTER:
              return action.payload || false;
        default: 
          return state;
    }
}