import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Text, Link } from '@chakra-ui/react'
import Sticky from 'react-stickynode'

import { Cart } from './Cart'

function Navbar() {
  return (
    <Sticky enabled innerZ={9999}>
      <Flex
        as="header"
        h="5rem"
        w="100%"
        px={5}
        py={4}
        justifyContent="space-between"
        alignItems="center"
        shadow="md"
        bgColor="white"
      >
        <Flex flexDirection="row" alignItems="center">
          <Link as={NavLink} to="/" _hover={{ textDecoration: 'none' }}>
            <Text>Ammibo Store</Text>
          </Link>
        </Flex>
        <Flex flexDirection="row" alignItems="center" mr={2}>
          <Cart />
        </Flex>
      </Flex>
    </Sticky>
  )
}

export { Navbar }
