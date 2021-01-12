import React from 'react'
import { Box, SimpleGrid, Heading, Divider } from '@chakra-ui/react'

interface SectionCardProps {
  name: string
  children: React.ReactNode
}

function SectionCard({ name, children }: SectionCardProps) {
  return (
    <Box my="5%" mx="10%">
      <Heading size="lg">{name.toUpperCase()}</Heading>
      <Divider mb={10} />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8}>
        {children}
      </SimpleGrid>
    </Box>
  )
}

export { SectionCard }
