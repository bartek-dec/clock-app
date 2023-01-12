import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const url = `https://api.ipbase.com/v2/info?apikey=${process.env.REACT_APP_API_KEY}`;

const initialState = {
    city: '',
    country: '',
    code: '',
    error: false
}

export const getLocation = createAsyncThunk('getLocation', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(true);
    }
});

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLocation.pending, (state) => {
            state.error = false;
        }).addCase(getLocation.fulfilled, (state, {payload}) => {
            state.city = payload.data.location.city.name;
            state.country = payload.data.location.country.alpha2;
            state.code = payload.data.timezone.code;
        }).addCase(getLocation.rejected, (state) => {
            state.error = true;
        })
    }
});

export default locationSlice.reducer;
















