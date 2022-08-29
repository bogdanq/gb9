import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter";
import { profileReducer } from "./profile";

export const store = createStore(
  combineReducers({ counter: counterReducer, profile: profileReducer })
);
