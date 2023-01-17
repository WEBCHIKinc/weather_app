import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { redusers } from "./reducers";

const rootReducer = combineReducers(redusers);

export const store = configureStore({
  reducer: rootReducer,
});
