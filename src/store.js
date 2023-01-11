import {configureStore} from "@reduxjs/toolkit";
import moreBtnSlice from "./features/moreBtn/moreBtnSlice";

const store = configureStore({
    reducer: {
        moreBtn: moreBtnSlice
    }
});

export default store;