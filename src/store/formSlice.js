import { createSlice } from "@reduxjs/toolkit";
export const cardSlice = createSlice({
    name: "form",
    initialState: [],
    reducers: {
        addCard(state, action) {
            state = [...state, action.payload.data]
        },
        removeCard(state, action) {
            state = state.filter(data => data.id != action.payload.id)
        },
    }
})

export const { addCard, removeCard } = cardSlice.actions

export default cardSlice.reducer