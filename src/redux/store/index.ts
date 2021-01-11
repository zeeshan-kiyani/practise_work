
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/index';
// import userReducer from '../reducers/userReducer'
export default function configureStore() {
 return createStore(
    rootReducer,
    // userReducer,
    applyMiddleware(thunk)
 );
}