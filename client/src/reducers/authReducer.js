import {IS_LOGGED_IN} from '../actions/types';

export default function(state = [],action){
    switch(action.type){
        case IS_LOGGED_IN:
              return action.payload || false;
        default: 
          return state;
    }
}