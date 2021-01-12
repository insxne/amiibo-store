import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, CircularProgress } from '@chakra-ui/react'

import { Card } from '../components/Card'
import { SectionCard } from '../components/SectionCard'

import {
  getProductsByCategories,
  getProducts,
  getStatus,
} from '../features/product'

function Home() {
  const productByCategory = useSelector(getProductsByCategories)
  const status = useSelector(getStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  if (status === 'loading') {
    return (
      <Flex alignItems="center" justifyContent="center" height="80vh">
        <CircularProgress isIndeterminate color="green.300" />
      </Flex>
    )
  }

  return (
    <>
      {productByCategory.map(({ category, products }) => (
        <SectionCard key={category} name={category}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </SectionCard>
      ))}
    </>
  )
}

export { Home }
