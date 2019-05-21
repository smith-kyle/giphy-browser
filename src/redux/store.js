import { createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
