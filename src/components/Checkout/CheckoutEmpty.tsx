import { Stack, Button, Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function CheckoutEmpty() {
  return (
    <Stack justify="center" alignItems="center" spacing={8}>
      <Text fontWeight="semibold" fontSize="lg">
        Tu carrito esta vacío
      </Text>
      <Box>
        <Link as={NavLink} to="/">
          <Button colorScheme="blue">Comprar nuestros productos</Button>
        </Link>
      </Box>
    </Stack>
  )
}

export { CheckoutEmpty }
