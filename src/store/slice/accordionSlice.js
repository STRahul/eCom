import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        ctaegory: 'Men',
        items: ["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        ctaegory: 'Women',
        items: ["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        ctaegory: 'Kids',
        items: ["Coats","Jackets","Party Wear","Shirts"]
    }
]
const accordionSlice = createSlice({
    name:'accordionSlice',
    initialState
})

export default accordionSlice;