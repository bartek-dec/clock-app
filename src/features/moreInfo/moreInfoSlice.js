import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://worldtimeapi.org/api/ip';

const initialState = {
    timezone: '',
    dayOfYear: '',
    dayOfWeek: '',
    weekNum: '',
    error: false
}

export const getTimeInfo = createAsyncThunk('getTimeInfo', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(true);
    }
});

const moreInfoSlice = createSlice({
    name: 'moreInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTimeInfo.pending, (state) => {
            state.error = false;
        }).addCase(getTimeInfo.fulfilled, (state, {payload}) => {
            state.timezone = payload.timezone;
            state.dayOfYear = payload.day_of_year;
            state.dayOfWeek = payload.day_of_week;
            state.weekNum = payload.week_number;
        }).addCase(getTimeInfo.rejected, (state, {payload}) => {
            state.error = payload;
        })
    }
});

export default moreInfoSlice.reducer;
















