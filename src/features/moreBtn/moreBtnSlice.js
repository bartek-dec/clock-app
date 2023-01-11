import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isClosed: true,
}

const moreBtnSlice = createSlice({
    name: 'moreBtn',
    initialState,
    reducers: {
        setIsClosed: (state) => {
            state.isClosed = !state.isClosed;
        },
        setAdviceHeight: (state, action) => {
            state.adviceHeight = action.payload;
        },
        setInfoHeight: (state, action) => {
            state.infoHeight = action.payload;
        },
        calcHeight: (state) => {
            if (!state.isOpen) {
                state.infoHeight = state.adviceHeight;
                state.adviceHeight = 0
            } else {
                state.adviceHeight = state.infoHeight;
                state.infoHeight = 0;
            }
            state.isOpen = !state.isOpen;
        }
    }
});

export default moreBtnSlice.reducer;

export const {calcHeight,setIsClosed, setAdviceHeight, setInfoHeight} = moreBtnSlice.actions;