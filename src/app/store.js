// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../features/examples/exampleSlice"
import foodItemsReducer from "../features/foodItems/foodItemsSlice"
export const store = configureStore({
    reducer: {
        example: exampleReducer,
        foodItems: foodItemsReducer
    },
});