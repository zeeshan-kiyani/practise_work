import {combineReducers} from 'redux'
import userReducer from '../reducers/userReducer'
export const rootReducer = (state ,action) => {
    return appReducer (state ,action)
}
const appReducer = combineReducers ({
    userReducer
})