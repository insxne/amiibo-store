import { Box, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import React from 'react'

import { Cart } from '../../features/cart/types'
import { formatNumber } from '../../util'
import { CartQuantityItemInput, CartRemoveItemButton } from '../Cart'

interface CheckoutTableProps {
  cart: Cart
}

function CheckoutTable({ cart }: CheckoutTableProps) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Producto</Th>
          <Th>Cantidad</Th>
          <Th isNumeric>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cart.items.map((cartItem) => (
          <Tr key={cartItem.item.id}>
            <Td>{cartItem.item.title}</Td>
            <Td>
              <CartQuantityItemInput cartItem={cartItem} />
              <Box textAlign="right" mt={2}>
                <CartRemoveItemButton item={cartItem.item}>
                  <Text fontSize="xs">Eliminar</Text>
                </CartRemoveItemButton>
              </Box>
            </Td>
            <Td isNumeric>{formatNumber(cart.total)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export { CheckoutTable }
