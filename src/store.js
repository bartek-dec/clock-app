import {configureStore} from "@reduxjs/toolkit";
import moreBtnSlice from "./features/moreBtn/moreBtnSlice";
import refreshSlice from "./features/refresh/refresh";

const store = configureStore({
    reducer: {
        moreBtn: moreBtnSlice,
        refresh: refreshSlice
    }
});

export default store;