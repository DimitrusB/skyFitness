import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './reducers/api.jsx'



export const store = configureStore({
    reducer: {
        api: apiReducer,
    },
})