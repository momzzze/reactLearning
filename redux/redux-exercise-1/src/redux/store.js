
import { configureStore } from '@reduxjs/toolkit';
import  userReducer from './slices/userSlice';
import productReducer from './slices/productSlice';

const store = configureStore({
    reducer: {
        users: userReducer,
        products: productReducer
    }
})



export default store;