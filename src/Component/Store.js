import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './Slices/CartSlice';
import filterSlice from './Slices/FilterSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter:filterSlice,
    },
});

export default store;