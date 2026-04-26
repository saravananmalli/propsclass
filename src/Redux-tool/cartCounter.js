import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};  

export const cartCounterSlice = createSlice({
  name: "cartCounter",
  initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
    }
})

export const { increment, decrement } = cartCounterSlice.actions;

export default cartCounterSlice.reducer;