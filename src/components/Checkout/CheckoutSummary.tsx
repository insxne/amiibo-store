import { Flex, Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

import { Cart } from '../../features/cart/types'
import { formatNumber } from '../../util'

interface CheckoutSummaryProps {
  cart: Cart
}

function CheckoutSummary({ cart }: CheckoutSummaryProps) {
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Button colorScheme="blue">Pagar</Button>
      </Box>
      <Box>
        <Text as="span" mr={2}>
          Total:
        </Text>
        <Text as="span" fontWeight="semibold">
          {formatNumber(cart.total)}
        </Text>
      </Box>
    </Flex>
  )
}

export { CheckoutSummary }
