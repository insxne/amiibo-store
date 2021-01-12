import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { getCart } from '../features/cart/cartSlice'
import { CheckoutTable } from '../components/Checkout/CheckoutTable'
import { CheckoutSummary } from '../components/Checkout/CheckoutSummary'
import { CheckoutEmpty } from '../components/Checkout/CheckoutEmpty'

export const Checkout: React.FC = () => {
  const cart = useSelector(getCart)

  return (
    <Box my="5%" mx="10%">
      {cart.items.length ? (
        <Stack spacing={25}>
          <Box borderWidth="1px" borderRadius="md" p={5}>
            <CheckoutSummary cart={cart} />
          </Box>
          <Box borderWidth="1px" borderRadius="md" p={5}>
            <CheckoutTable cart={cart} />
          </Box>
        </Stack>
      ) : (
        <CheckoutEmpty />
      )}
    </Box>
  )
}
