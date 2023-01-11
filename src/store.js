import {configureStore} from "@reduxjs/toolkit";
import moreBtnSlice from "./features/moreBtn/moreBtnSlice";
import refreshSlice from "./features/refresh/refreshSlice";
import moreInfoSlice from './features/moreInfo/moreInfoSlice';

const store = configureStore({
    reducer: {
        moreBtn: moreBtnSlice,
        refresh: refreshSlice,
        moreInfo: moreInfoSlice
    }
});

export default store;