export enum ProductCategory {
  Figure = 'Figure',
  Card = 'Card',
  Yarn = 'Yarn',
}

export interface Product {
  id: string
  imageUrl: string
  imageAlt: string
  title: string
  category: 'Figure' | 'Card' | 'Yarn'
  price: number
}
