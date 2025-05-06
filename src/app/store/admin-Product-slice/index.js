import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    productList: [],

}

export const addNewProduct = createAsyncThunk('/products/addNewProduct', async (formData) => {
    const result = await axios.post('http://localhost:5000/api/admin/add', formData, {
        headers: {
            'Content-Type': 'application/json',
        },


    });
    return result?.data
})

export const fetchAllProducts = createAsyncThunk('/products/fetchAllProducts', async () => {
    const result = await axios.get('http://localhost:5000/api/admin/get');
    console.log("API Response:", result?.data);
    return result?.data
})
export const editProducts = createAsyncThunk('/products/editProducts', async ({ id, formData }) => {
    const result = await axios.put(`http://localhost:5000/api/admin/edit/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },


    });
    return result?.data
})
export const deleteProducts = createAsyncThunk('/products/deleteProducts', async (id, formData) => {
    const result = await axios.delete(`http://localhost:5000/api/admin/delete/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },


    });
    return result?.data
})

const adminProductSlice = createSlice({
    name: 'adminProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.productList = action.payload?.data;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.productList = []
            })

    }
})

export default adminProductSlice.reducer;