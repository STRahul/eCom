import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slice/categorySlice";

const store = configureStore({
    reducer:{
       categoryReducer: categorySlice
    }
})

export default store;