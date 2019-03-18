import {combineReducers} from 'redux'
import {adminReducer} from "./admin-reducer";
import {commonReducer} from "./common-reducer";

export default combineReducers({
    adminReducer,
    commonReducer
})