import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk(
    'getProducts',
    ()=>{
        const products = [
            {
                id:1,
                pName: 'Jacket',
                price: 45,
                img: 'shop-1.jpg',
                category_id: 2
            },
            {
                id:2,
                pName: 'Purse',
                price: 50,
                img: 'shop-2.jpg',
                category_id: 6
            },
            {
                id:3,
                pName: 'Dress',
                price: 38,
                img: 'shop-3.jpg',
                category_id: 6
            },
            {
                id: 4,
                pName: 'Denim Jeans',
                price: 42,
                img: 'shop-4.jpg',
                category_id: 2
            },
            {
                id:5,
                pName: 'Laced Boots',
                price: 65,
                img: 'shop-5.jpg',
                category_id: 7
            },
            {
                id:6,
                pName: 'Backpack',
                price: 20,
                img: 'shop-6.jpg',
                category_id: 3
            },
            {
                id:7,
                pName: 'Earings',
                price: 12,
                img: 'shop-7.jpg',
                category_id: 8
            },
            {
                id:8,
                pName: 'Scarf',
                price: 15,
                img: 'shop-8.jpg',
                category_id: 3
            },
            {
                id:9,
                pName: 'Leather Boots',
                price: 115,
                img: 'shop-9.jpg',
                category_id: 7
            },
        ];
        return products;
    }
)
const initialState = {
    products:[],
    status: 'idle',
    error: ''
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers:{
        filterProducts: (state,action)=>{
           const filteredData = action.payload.products.filter(ele=>{
            return ele.category_id === action.payload.selectedCategory.id
           })

           state.products = filteredData;
        },
        filterByPrice: (state,action)=>{
            const filterData = action.payload.products.filter(ele=>{
                return ele.price >= action.payload.minPriceLimit && ele.price <= action.payload.maxPriceLimit
            })
            state.products = filterData;
        }
    },
    extraReducers:builder=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status = "Loading...."
        })
        builder.addCase(getProducts.fulfilled,(state, action)=>{
            state.status = "Success"
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.status = "Failed!"
            state.error = action.error.message
        })
    }
})

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;