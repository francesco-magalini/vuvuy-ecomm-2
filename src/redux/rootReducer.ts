import { combineReducers } from "redux";

import authReducer from "../modules/auth/redux/reducers/authReducer";
import authFormReducer from '../modules/auth/redux/reducers/authFormReducer'
import i18nReducer from "../modules/i18n/redux/reducers";


export const rootReducer = combineReducers({
  auth: authReducer,
  form: authFormReducer,
  i18n: i18nReducer,
});
