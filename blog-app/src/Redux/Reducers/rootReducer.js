import { combineReducers } from "redux";
import postReducer from "../Reducers/PostReducer";
import albumReducer from "../Reducers/AlbumReducer";
import formReducer from "../Reducers/formReducer";
export default combineReducers({ postReducer, albumReducer, formReducer });
