import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice"

const store = configureStore ({
    reducer:{
        cart: CartSlice,
    },
})

export default store;