import { ProductCategory } from '../../types'

export interface Amiibo {
  image: string
  name: string
  type: ProductCategory
  head: string
  tail: string
}
