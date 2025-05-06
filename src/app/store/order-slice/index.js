
// features/order/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch orders
export const fetchOrders = createAsyncThunk('order/fetchOrders', async () => {
    const response = await axios.get('http://localhost:5000/api/orders'); // Adjust API path as needed
    return response.data?.orderShowCase;
});

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOrders.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;
