import React from 'react'

import { Box, Image, Stack, Text } from '@chakra-ui/react'
import { CartItem } from '../../features/cart/types'
import { CartRemoveItemButton } from './CartRemoveItemButton'
import { CartQuantityItemInput } from './CartQuantityItemInput'
import { formatNumber } from '../../util'

interface CartItemCardProps {
  cartItem: CartItem
}

function CartItemCard({ cartItem }: CartItemCardProps) {
  return (
    <Box overflow="hidden">
      <Stack direction="row" spacing="4">
        <Box>
          <Image
            w="80px"
            src={cartItem.item.imageUrl}
            alt={cartItem.item.imageAlt}
          />
        </Box>
        <Box>
          <Stack spacing="3">
            <Box isTruncated>
              <Text fontSize="xs">{cartItem.item.title}</Text>
            </Box>
            <Box>
              <Text fontSize="xs">{formatNumber(cartItem.total)}</Text>
            </Box>
            <Box>
              <CartQuantityItemInput cartItem={cartItem} />
            </Box>
            <Box textAlign="right">
              <CartRemoveItemButton item={cartItem.item}>
                <Text fontSize="xs">Eliminar</Text>
              </CartRemoveItemButton>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export { CartItemCard }
