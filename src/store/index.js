import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./citiesReducer";

export const store = configureStore({
    reducer: citiesReducer
})