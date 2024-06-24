import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
        const categories = ["Men","Women","Kids","Best Offers","All"];
        return categories;
    }
)

const initialState = {
    categories: [],
    status: "idle",
    error: ""
}


const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {},
    extraReducers: builder=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.status = "Loading...."
        })
        builder.addCase(getCategories.fulfilled,(state, action)=>{
            state.status = "Success"
            state.categories = action.payload
        })
        builder.addCase(getCategories.rejected,(state,action)=>{
            state.status = "Failed!"
            state.error = action.error.message
        })
    }
})

export default categorySlice.reducer;