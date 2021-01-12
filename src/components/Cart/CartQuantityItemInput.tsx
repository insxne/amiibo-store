import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'

import { cartSlice } from '../../features/cart/cartSlice'
import { CartItem } from '../../features/cart/types'

interface CartQuantityItemInputProps {
  cartItem: CartItem
}

function CartQuantityItemInput({ cartItem }: CartQuantityItemInputProps) {
  const dispatch = useDispatch()

  return (
    <NumberInput
      onChange={(_, quantity) =>
        dispatch(
          cartSlice.actions.updateProductQuantity({
            product: cartItem.item,
            quantity,
          })
        )
      }
      size="md"
      value={cartItem.quantity}
      min={1}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export { CartQuantityItemInput }
