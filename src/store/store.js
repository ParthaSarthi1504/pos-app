import { configureStore } from "@reduxjs/toolkit";
import card from "../slice/card";


const store = configureStore({
    reducer:{
        cardInfo: card
    }
})

export default store;