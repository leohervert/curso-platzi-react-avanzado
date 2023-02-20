import React from 'react'
import { CategorySkeleton } from '../CategorySkeleton'
import { Item } from '../ListOfCategories/styles'
import { Container } from './styles'
export const ListOfSkeletonCategories = () => {
  const array = Array.apply(null, Array(5))
  return (
    <Container>
      {array.map(x => (
        <Item key={x}>
          <CategorySkeleton />
        </Item>
      ))}
    </Container>
  )
}
