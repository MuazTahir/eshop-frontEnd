import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const apiData = createAsyncThunk('apidata',
    async (_, ThunkAPI) => {
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products')
            return response.data.products

        } catch (error) {
            return ThunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const fetchMongoProducts = createAsyncThunk('mongoApi',
    async () => {
        const response = await axios.get('http://localhost:5000/api/getAllProducts')
        return response.data
    }
)


const initialState = {
    products: [],
    isLoading: false,
    error: null
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(
            apiData.pending, (state) => {
                state.isLoading = true
            }
        )
            .addCase(
                apiData.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.products = action.payload
                    state.error = null
                }
            )
            .addCase(
                apiData.rejected, (state, action) => {
                    state.isLoading = false
                    state.products = []
                    state.error = action.payload
                }
            )
            .addCase(fetchMongoProducts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchMongoProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(fetchMongoProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export default dataSlice.reducer