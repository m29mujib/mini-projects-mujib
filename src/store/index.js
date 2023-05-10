import formSlice from "./formSlice";
import themeReducer from './theme'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        form: formSlice,
        theme: themeReducer
    }
})