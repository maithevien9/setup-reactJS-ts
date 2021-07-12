import { combineReducers } from "redux";
import organizationsReducer from "./organizations/slice";

const rootReducer = combineReducers({
  organizations: organizationsReducer,
});

export default rootReducer;
