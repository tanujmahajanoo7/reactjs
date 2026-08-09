import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, // The key 'auth' here defines your state structure
    }
})

export default store;
