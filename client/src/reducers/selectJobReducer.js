import {SELECT_JOB} from '../actions/types';

export default function(state = [],action){
    switch(action.type){
        case SELECT_JOB:
              return action.payload || false;
        default: 
          return state;
    }
}