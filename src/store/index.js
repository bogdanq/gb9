import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";

export const store = createStore(combineReducers({ counter: counterReducer }));
