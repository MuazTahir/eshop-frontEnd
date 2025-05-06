import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    dailyState: [],
    isLoading: false,
    error: null,
};


export const dailyAnalyticalDataFetch = createAsyncThunk(
    'analytical/dataFetch',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:5000/api/userCount');
            return res.data.data;

        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);


const analyticalSlice = createSlice({
    name: 'analytical',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(dailyAnalyticalDataFetch.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(dailyAnalyticalDataFetch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.dailyState = action.payload;
            })
            .addCase(dailyAnalyticalDataFetch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export default analyticalSlice.reducer;
