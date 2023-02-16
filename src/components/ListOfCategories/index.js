import React from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map(x => (
        <Item key={x}>
          <Category />
        </Item>
      ))}
    </List>
  )
}
