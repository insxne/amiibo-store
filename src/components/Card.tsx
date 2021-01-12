import React from 'react'
import { Box, Flex, Image, Button, Text, Stack, Link } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Product } from '../types'
import { cartSlice, getCartItemById } from '../features/cart/cartSlice'
import { Cart } from '../features/cart/types'
import { CartQuantityItemInput, CartRemoveItemButton } from './Cart'
import { formatNumber } from '../util'

interface CardProps {
  product: Product
}

function Card({ product }: CardProps) {
  const dispatch = useDispatch()
  const cartItem = useSelector((state: { cart: Cart }) =>
    getCartItemById(state, product.id)
  )

  return (
    <Box maxW="sm" rounded="lg" overflow="hidden">
      <Flex justifyContent="center">
        <Image src={product.imageUrl} alt={product.imageAlt} />
      </Flex>

      <Box p="5" textAlign="center">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Box mt="1">{formatNumber(product.price)}</Box>
        <Box mt="1">
          {cartItem ? (
            <Stack>
              <Box>
                <CartQuantityItemInput cartItem={cartItem} />
              </Box>
              <Box textAlign="right">
                <CartRemoveItemButton item={cartItem.item}>
                  <Text fontSize="xs">Eliminar</Text>
                </CartRemoveItemButton>
              </Box>
              <Flex alignItems="center" justify="center" mt={5}>
                <Link
                  as={NavLink}
                  to="/checkout"
                  w="100%"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button colorScheme="blue" isFullWidth>
                    Comprar ahora
                  </Button>
                </Link>
              </Flex>
            </Stack>
          ) : (
            <Button
              colorScheme="green"
              onClick={() => {
                dispatch(cartSlice.actions.addProduct(product))
              }}
              width="100%"
            >
              Add to cart
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export { Card }
