/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { Product } from '../../types'
import { client } from '../../api/client'
import { AMIIBO_API_URL, CATEGORIES } from '../../constants'
import { transformToProduct } from './transform'

export interface ProductState {
  products: Product[]
  status: 'idle' | 'loading' | 'failed' | 'success'
  error: string | null
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
}

export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await Promise.all(
      CATEGORIES.map((category) =>
        client.get(`${AMIIBO_API_URL}/?type=${category}`)
      )
    )
    return response.flatMap((r) => r.amiibo.slice(0, 4)).map(transformToProduct)
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = 'loading'
    })

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.status = 'success'
      state.products = action.payload
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.payload as string
    })
  },
})

export const getProductsByCategories = (state: { products: ProductState }) => {
  return CATEGORIES.map((category) => ({
    category,
    products: state.products.products.filter(
      (product) => product.category === category
    ),
  }))
}

export const getStatus = (state: { products: ProductState }) =>
  state.products.status

export default productsSlice.reducer
