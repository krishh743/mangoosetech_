
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data,"response.data.movies")
    return response.data;
});

const moviesSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default moviesSlice.reducer;
