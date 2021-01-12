import { Amiibo } from './types'

export const transformToProduct = (amiibo: Amiibo) => ({
  id: `${amiibo.name}${amiibo.head}${amiibo.tail}`,
  imageUrl: amiibo.image,
  imageAlt: amiibo.name,
  title: amiibo.name,
  category: amiibo.type,
  price: 100,
})
