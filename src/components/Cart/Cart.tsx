import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  Flex,
  Button,
  IconButton,
  Box,
  Badge,
  Text,
  Link,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { getCart } from '../../features/cart/cartSlice'
import { CartList } from './CartList'
import { formatNumber } from '../../util'

function Cart() {
  const cart = useSelector(getCart)

  return (
    <Popover>
      <Box mr={5}>{formatNumber(cart.total)}</Box>
      <PopoverTrigger>
        <IconButton aria-label="cart">
          <>
            <FiShoppingCart />
            <Box position="absolute" mt="-10" ml="10">
              <Badge colorScheme="red" borderRadius="12px">
                <Box p="1">{cart.quantity}</Box>
              </Badge>
            </Box>
          </>
        </IconButton>
      </PopoverTrigger>
      {cart.items.length === 0 ? (
        <PopoverContent mr={5} bColor="white">
          <PopoverBody p={5}>
            <Text textAlign="center">Tu carrito esta vacio</Text>
          </PopoverBody>
        </PopoverContent>
      ) : (
        <PopoverContent mr={5} bColor="white" zIndex={99999}>
          <PopoverBody p={5} maxH="sm" overflowY="auto">
            <CartList cartItems={cart.items} />
          </PopoverBody>
          <PopoverFooter p={5}>
            <Flex justifyContent="space-between" alignItems="center" mb={7}>
              <Text fontWeight="semibold">Total</Text>
              <Text>{formatNumber(cart.total)}</Text>
            </Flex>
            <Flex alignItems="center" justify="center">
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
          </PopoverFooter>
        </PopoverContent>
      )}
    </Popover>
  )
}

export { Cart }
