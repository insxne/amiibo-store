import React from 'react'
import { Stack } from '@chakra-ui/react'

import { CartItemCard } from './CartItemCard'
import { CartItem } from '../../features/cart/types'

interface CartListProps {
  cartItems: Array<CartItem>
}

function CartList({ cartItems }: CartListProps) {
  return (
    <Stack spacing="3">
      {cartItems.map((cartItem) => (
        <CartItemCard key={cartItem.item.id} cartItem={cartItem} />
      ))}
    </Stack>
  )
}

export { CartList }
