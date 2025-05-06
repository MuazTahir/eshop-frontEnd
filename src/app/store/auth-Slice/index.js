
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false
}

export const SignUpUser = createAsyncThunk('auth/SignUp',

    async (FormData) => {
        const response = await axios.post('http://localhost:5000/api/auth/SignUp', FormData, {
            withCredentials: true
        })
        return response.data
    }
)

export const LoginUser = createAsyncThunk('auth/Login',
    async (FormData) => {
        const response = await axios.post('http://localhost:5000/api/auth/Login', FormData, {
            withCredentials: true
        })
        return response.data
    }
)

export const verify = createAsyncThunk('auth/check-auth', async () => {
    const res = await axios.get('http://localhost:5000/api/auth/check-auth', {
        withCredentials: true
    })
    return res.data

})

export const logoutUser = createAsyncThunk('auth/logout', async () => {
    const res = await axios.post('http://localhost:5000/api/auth/logout', {
        withCredentials: true
    })

    return res.data
})

const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {

        setUser: (state, action) => {

        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            SignUpUser.pending, (state) => {
                state.isLoading = true
            }
        )
            .addCase(
                SignUpUser.fulfilled, (state) => {
                    state.isLoading = false
                    state.isAuthenticated = false
                    state.user = null
                }
            )
            .addCase(
                SignUpUser.rejected, (state) => {
                    state.isAuthenticated = false
                    state.isLoading = false
                    state.user = null
                }
            )
            .addCase(
                LoginUser.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                LoginUser.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isAuthenticated = action.payload.success
                    state.user = action.payload.success ? action.payload.user : null
                }
            )
            .addCase(
                LoginUser.rejected, (state) => {
                    state.isAuthenticated = false
                    state.isLoading = false
                    state.user = null
                }
            )
            .addCase(
                logoutUser.fulfilled, (state) => {
                    state.isAuthenticated = false
                    state.isLoading = false
                    state.user = null
                }
            )
            .addCase(
                verify.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(
                verify.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isAuthenticated = action.payload.success
                    state.user = action.payload.success ? action.payload.user : null
                }
            )
            .addCase(
                verify.rejected, (state) => {
                    state.isAuthenticated = false
                    state.isLoading = false
                    state.user = null
                }
            )
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;