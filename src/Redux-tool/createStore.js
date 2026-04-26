import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

import cartCounterReducer from "./cartCounter"; 

export const store = configureStore({
  reducer: {
    counter: counterReducer, // ✅ FIXED (match selector)
    cartCounter: cartCounterReducer, // ✅ ADDED (for cart counter)
  },
});