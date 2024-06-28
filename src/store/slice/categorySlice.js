import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
        const categories = [
            {
                id:1,
                category: 'Men',
                parent_category_id: null,
            },
            {
                id:4,
                category: 'Women',
                parent_category_id: null,
            },
            {
                id:5,
                category: 'Kids',
                parent_category_id: null,
            },
            {
                id:2,
                category: 'Casual Wear',
                parent_category_id: 1,
            },
            {
                id:6,
                category: 'Party Wear',
                parent_category_id: 4,
            },
            {
                id:7,
                category: 'Foot Wear',
                parent_category_id: 4,
            },
            {
                id:8,
                category: 'Accessories',
                parent_category_id: 4,
            },
            {
                id:3,
                category: 'Accessories',
                parent_category_id: 5,
            },


        ];
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