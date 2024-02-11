import { configureStore } from "@reduxjs/toolkit";
import createReadSlice from "./reducer/slices/createRead.slice";

export const storeConfig = configureStore({
    reducer: {
        todo: createReadSlice.reducer
    }
})