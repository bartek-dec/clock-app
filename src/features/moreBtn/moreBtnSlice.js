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
        }
    }
});

export default moreBtnSlice.reducer;

export const {setIsClosed} = moreBtnSlice.actions;