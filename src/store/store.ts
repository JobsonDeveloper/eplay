import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddlawere) =>
    getDefaultMiddlawere().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
