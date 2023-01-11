import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://api.quotable.io/random';

const initialState = {
    content: '',
    author: '',
    error: ''
}

export const getQuote = createAsyncThunk('getQuote', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue("Something went wrong. Please try later.")
    }
})

const refreshSlice = createSlice({
    name: 'refresh',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuote.pending, (state) => {
            state.error = '';
        }).addCase(getQuote.fulfilled, (state, action) => {
            state.content = action.payload.content;
            state.author = action.payload.author;
        }).addCase(getQuote.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});

export default refreshSlice.reducer;