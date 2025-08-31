import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "~/store/slice";

const Store = configureStore({
    reducer: {
        ui: stateSlice.reducer,
    },
});

export default Store;