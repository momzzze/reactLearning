import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice/countSlice";

export const store=configureStore({
    reducer:{
        count: countReducer
    },
});

