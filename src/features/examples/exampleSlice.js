import { createSlice } from "@reduxjs/toolkit";
import { Value } from "sass";

export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        Value: 0,
    },
    reducers: {
        increment: (state) => {
            state.Value += 1
        }
        ,
        decrement: (state) => {
            state.Value -= 1
        },
        incrementByAmount: (state, action) => {
            state.Value += action.payload
        }
    }


})
export const { increment, decrement, incrementByAmount } = exampleSlice.actions
export default exampleSlice.reducer