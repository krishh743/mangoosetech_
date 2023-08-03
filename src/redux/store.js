
import {configureStore} from '@reduxjs/toolkit';
import detailsSlice from './ApiService';

const store = configureStore({
    reducer: {
        data: detailsSlice,
    },
});

export default store;
