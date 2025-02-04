import { createSlice } from "@reduxjs/toolkit";
// import {services} from "../data/service.json"


const cards = createSlice({
    name: "service cards",
    initialState: {
        cardList: [],
        price: 0,
        userDetail: {}
    },
    reducers: {
        addToCard: (state, action) => {
            const cardExist = state.cardList.findIndex((card) => card.id == action?.payload?.id)

            if (cardExist == -1) {
                state.cardList.push(action.payload);
                state.price += action.payload.price;
            } else {
                state.cardList = state.cardList.map((card) => {
                    if (card.id == action?.payload?.id) {
                        return ({ ...card, count: card.count + 1 })
                    }
                    return card
                })
                state.price += state.cardList[cardExist]?.price
            }
        },
        removeCard: (state, action) => {
            const cardExist = state.cardList.findIndex((card) => card.id == action?.payload)
            if (cardExist != -1) {
                state.price -= state.cardList[cardExist]?.price * state.cardList[cardExist]?.count;
                state.cardList = state.cardList.filter((card) => card.id != action?.payload)
            }
        },
        increamentClassCount: (state, action) => {
            const cardExist = state.cardList.findIndex((card) => card.id == action?.payload)
            if (cardExist != -1) {
                state.price += state.cardList[cardExist]?.price

                state.cardList = state.cardList.map((card) => {
                    if (card.id == action?.payload) {
                        return ({ ...card, count: card.count + 1 })
                    }
                    return card
                })
            }
        },
        decrementClassCount: (state, action) => {
            const cardExist = state.cardList.findIndex((card) => card.id == action?.payload)
            if (cardExist != -1) {
                const actualCount = state.cardList[cardExist]?.count;
                console.log("actualCount===>", actualCount);
                state.price -= state.cardList[cardExist]?.price;
                if (actualCount == 1) {
                    state.cardList = state.cardList.filter((card) => card.id != action?.payload)
                } else {

                    state.cardList = state.cardList.map((card) => {
                        if (card.id == action?.payload) {
                            return ({ ...card, count: card.count - 1 })
                        }
                        return card
                    })
                }
            }
        },
        addUserDetail: (state, action) => {
            state.userDetail = action?.payload
        }

    }
})

export const { addToCard, removeCard, increamentClassCount, decrementClassCount,addUserDetail } = cards.actions;
export default cards.reducer;