import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './index'

export const store = configureStore({
    reducer: { todo: todoReducer },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
