import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    error: null,
    isLoading: false
};

// Thunk for fetching users
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:5000/api/users');
            // console.log("API Response:", res.data);
            return res.data.users; // Make sure to return only the array of users
        } catch (err) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);

// const getAllUsers = createAsyncThunk('user/getAll', async () => {
//     try {
//         const res = await axios.get('http://localhost:5000/api/authadminUser')
//         return res.data.users;
//     } catch (error) {
//         return error.message
//     }
// })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = [];
                state.error = action.payload;
            })
        // .addCase(getAllUsers.pending, (state) => {
        //     state.isLoading = true;
        // })
        // .addCase(getAllUsers.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.users = action.payload;
        // })
        // .addCase(getAllUsers.rejected, (state) => {
        //     state.isLoading = false;
        //     state.users = [];
        // })

    }
});

export default userSlice.reducer;
