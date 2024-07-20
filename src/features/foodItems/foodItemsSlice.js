// src/features/foodItems/foodItemsSlice.js
import burgerImg from "../../images/homePage/popularFoodSection/burger.png"
import friesImg from "../../images/homePage/popularFoodSection/fries.png"
import pizzaImg from "../../images/homePage/popularFoodSection/pizza.png"
import pastaImg from "../../images/homePage/popularFoodSection/pasta.png"

import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, name: 'Classic Burger', products: 5, image: burgerImg },
    { id: 2, name: 'Crispy Fries', products: 5, image: friesImg  },
    { id: 3, name: 'Pro Pizza', products: 5, image: pizzaImg },
    { id: 4, name: 'Spaghetti Bolognese', products: 5, image: pastaImg },
    { id: 5, name: 'Test', products: 5, image: pastaImg },
    { id: 6, name: 'Test', products: 5, image: pizzaImg },
    // { id: 7, name: 'Test', products: 5, image: burgerImg },
];

const foodItemsSlice = createSlice({
    name: 'foodItems',
    initialState,
    reducers: {
        addFoodItem(state, action) {
            state.push(action.payload);
        }
    }
});
export const { addFoodItem } = foodItemsSlice.actions;
export default foodItemsSlice.reducer;