import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    hour: '',
    greeting: '',
    daytime: ''
}

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    reducers: {
        setHour: (state, action) => {
            state.hour = action.payload;
        },
        setGreeting: (state) => {
            const currHour = state.hour;
            if (currHour >= 5 && currHour <= 11) {
                state.greeting = 'good morning';
            } else if (currHour >= 12 && currHour <= 17) {
                state.greeting = 'good afternoon';
            } else {
                state.greeting = 'good evening';
            }
        },
        setDaytime: (state) => {
            const currHour = state.hour;
            if (currHour >= 5 && currHour <= 17) {
                state.daytime = 'day';
            } else {
                state.daytime = 'night';
            }
        }
    }
});

export default greetingSlice.reducer;

export const {setHour, setGreeting, setDaytime} = greetingSlice.actions;