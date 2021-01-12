import { Product } from '../../types'

export interface CartItem {
  quantity: number
  item: Product
  total: number
}
export interface Cart {
  total: number
  quantity: number
  items: Array<CartItem>
}
