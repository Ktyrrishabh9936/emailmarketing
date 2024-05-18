import { configureStore } from "@reduxjs/toolkit";
import nodeReducer from "./node";

export const store = configureStore({
    reducer: {
        nodes: nodeReducer,
    },
});