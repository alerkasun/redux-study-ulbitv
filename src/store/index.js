import { createStore, combineReducers } from 'redux';
import cashReducer from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
})

const store = createStore(rootReducer, composeWithDevTools()); 

export default store;
