// store/shopProductSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    products: [],
    error: null,
};

// Fetch products for the shopping side
export const fetchShopProducts = createAsyncThunk(
    'shopProducts/fetchShopProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/get');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const shopProductSlice = createSlice({
    name: 'shopProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchShopProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchShopProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload?.data || [];
            })
            .addCase(fetchShopProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.error = action.payload?.message || 'Failed to fetch products';
            });
    },
});

export default shopProductSlice.reducer;
