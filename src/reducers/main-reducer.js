import {combineReducers} from 'redux'
import {addAdminReducer, adminReducer, editAdminReducer} from "./admin-reducer";
import {commonReducer} from "./common-reducer";

export default combineReducers({
    adminReducer,
    editAdminReducer,
    addAdminReducer,
    commonReducer
})