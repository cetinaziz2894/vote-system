import { combineReducers } from "redux";
import list from "./list";
import sort from "./sort";
import page from "./page";
import alert from "./alert";
// The key of this object will be the name of the store

export default combineReducers({list, sort, page, alert});