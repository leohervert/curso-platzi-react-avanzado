import React from 'react'
import {
  ContainerCategorySkeleton,
  CategoryImage,
  CategoryTitle
} from './styles'

export const CategorySkeleton = ({ light }) => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={light} />
      <CategoryTitle light={light} />
    </ContainerCategorySkeleton>
  )
}
