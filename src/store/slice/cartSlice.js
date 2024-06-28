import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    totalItemsPrice: 0,
    totalItems: 0,
    TotalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            let itemExits = state.cartItems.find(item => item.id === action.payload.id);

            if (!itemExits) {
                state.totalItems = ++state.totalItems;
                state.cartItems = [...state.cartItems, action.payload];
                state.TotalQuantity = ++state.TotalQuantity;
                state.totalItemsPrice = state.totalItemsPrice + action.payload.price
            }
        },
        updateItemQuantity: (state, action) => {
            const index = action.payload.key;

            if (action.payload.operator === '+') {
                ++state.cartItems[index].quantity;
                state.totalItemsPrice += action.payload.item.price;
                ++state.TotalQuantity
            }
            else {
                if (state.cartItems[index].quantity > 1) {
                    --state.cartItems[index].quantity;
                    state.totalItemsPrice -= action.payload.item.price;
                    --state.TotalQuantity
                }
            }
        },
        deleteCartItem: (state,action)=>{
          let filteredCart = state.cartItems.filter(item=>
            item.id !== action.payload.id
          );
          state.cartItems = filteredCart;
          state.totalItemsPrice -= action.payload.price * action.payload.quantity;
          state.TotalQuantity -= action.payload.quantity;
          --state.totalItems;
        }
    }
})

export const { addCartItem, updateItemQuantity, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;