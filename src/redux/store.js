
import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './MoviesSlice';

const store = configureStore({
    reducer: {
        data: moviesReducer,
    },
});

export default store;
