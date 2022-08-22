import {INCREMENT_COUNT,DECREMENT_COUNT} from '../Constants';

export function  IncrementCount() {
    return{type:INCREMENT_COUNT}

    
}
export function DecrementCount(){
    return{type:DECREMENT_COUNT}
}
