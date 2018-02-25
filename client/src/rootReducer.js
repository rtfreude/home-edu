import { combineReducers } from "redux";
import { authReducer } from "./data/authentication/authReducer";
 
export default combineReducers({
    authReducer: authReducer,
});