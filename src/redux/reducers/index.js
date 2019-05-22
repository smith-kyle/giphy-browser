import { combineReducers } from "redux";
import gifs from "./gifs";
import forms from "./forms";
import window from "./window";

export default combineReducers({ forms, gifs, window });
