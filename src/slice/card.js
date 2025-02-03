import { createSlice } from "@reduxjs/toolkit";
// import {services} from "../data/service.json"


const cards = createSlice({
    name: "service cards",
    initialState: {
        cardList: [],
        price: 0,
    },
    reducers:{
        addToCard: (state, action)=>{
            state.cardList.push(action.payload)
            state.price = state.cardList.reduce((accumulator, service) => {
                return accumulator + service.price;
            }, 0);
        }
    }
})

export const {addToCard} = cards.actions;
export default cards.reducer;