import {createStore,combineReducers} from 'redux';

import CountReducer  from '../../src/Reducer/CountReducer';

const rootReducer = combineReducers(
    {
        counter: CountReducer
    }
)

const  configureStore = () =>{
  return createStore(rootReducer)
}
export default configureStore;