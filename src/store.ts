import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './features/product/productsSlice'
import cartReducer from './features/cart/cartSlice'

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})
