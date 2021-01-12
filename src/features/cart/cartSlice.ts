/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit'
import { Cart } from './types'

export const initialState: Cart = {
  total: 0,
  quantity: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorage.getItem('cart')
    ? (JSON.parse(localStorage.getItem('cart') as string) as Cart)
    : initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const itemInCart = state.items.find(
        (cartItem) => cartItem.item.id === product.id
      )
      if (itemInCart) {
        itemInCart.quantity += 1
        itemInCart.total += product.price
      } else {
        state.items = state.items.concat({
          item: product,
          quantity: 1,
          total: product.price,
        })
      }
      state.total += product.price
      state.quantity += 1

      localStorage.setItem('cart', JSON.stringify(current(state)))
    },
    removeProduct: (state, action) => {
      const product = action.payload
      const itemInCart = state.items.find(
        (cartItem) => cartItem.item.id === product.id
      )
      if (itemInCart) {
        state.items = state.items.filter(
          (cartItem) => cartItem.item.id !== product.id
        )
        state.quantity -= itemInCart.quantity
        state.total -= itemInCart.total
      }

      localStorage.setItem('cart', JSON.stringify(current(state)))
    },
    updateProductQuantity: (state, action) => {
      const { product, quantity } = action.payload
      const itemInCart = state.items.find(
        (cartItem) => cartItem.item.id === product.id
      )
      if (itemInCart) {
        state.quantity = state.quantity - itemInCart.quantity + quantity
        state.total =
          product.price * quantity + (state.total - itemInCart.total)

        itemInCart.quantity = quantity
        itemInCart.total = quantity * product.price
      }
      localStorage.setItem('cart', JSON.stringify(current(state)))
    },
  },
})

export const getCart = (state: { cart: Cart }) => {
  return state.cart
}

export const getCartItemById = (state: { cart: Cart }, productId: string) => {
  return state.cart.items.find((itemCart) => itemCart.item.id === productId)
}

export default cartSlice.reducer
