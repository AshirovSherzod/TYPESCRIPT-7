import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import { api } from './api'
import wishlistSlice from './features/wishlist/wishlistSlice'
import cartSlice from './features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterSlice,
        [api.reducerPath]: api.reducer,
        wishlist: wishlistSlice,
        cart: cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  })
}
