import { combineReducers } from "redux";
import authReducer from "./authReducer";
import authFormReducer from "./authFormReducer";

export default combineReducers({
  authReducer,
  authFormReducer,
});
