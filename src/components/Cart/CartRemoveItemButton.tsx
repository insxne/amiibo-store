import React from 'react'
import { Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

import { Product } from '../../types'
import { cartSlice } from '../../features/cart/cartSlice'

interface CartRemoveItemButtonProps {
  item: Product
  children: React.ReactNode
}

function CartRemoveItemButton({ item, children }: CartRemoveItemButtonProps) {
  const dispatch = useDispatch()

  return (
    <Button
      colorScheme="red"
      variant="link"
      onClick={() => dispatch(cartSlice.actions.removeProduct(item))}
    >
      {children}
    </Button>
  )
}

export { CartRemoveItemButton }
