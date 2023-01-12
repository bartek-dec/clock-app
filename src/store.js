import {configureStore} from "@reduxjs/toolkit";
import moreBtnSlice from "./features/moreBtn/moreBtnSlice";
import refreshSlice from "./features/refresh/refreshSlice";
import moreInfoSlice from './features/moreInfo/moreInfoSlice';
import locationSlice from "./features/location/locationSlice";
import greetingSlice from "./features/greeting/greetingSlice";

const store = configureStore({
    reducer: {
        moreBtn: moreBtnSlice,
        refresh: refreshSlice,
        moreInfo: moreInfoSlice,
        location: locationSlice,
        greeting: greetingSlice
    }
});

export default store;