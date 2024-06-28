import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";
import productSlice from "./slice/productSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
    reducer:{
       cr: categorySlice,
       pr: productSlice,
       cart: cartSlice
    }
})

export default store;