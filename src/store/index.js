import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./weatherReducer";

export const store = configureStore({
  reducer: weatherReducer,
});
