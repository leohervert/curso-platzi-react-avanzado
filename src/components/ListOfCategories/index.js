import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { ListOfSkeletonCategories } from '../ListOfSkeletonCategories'
import { List, Item } from './styles'

export function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgran-server-lhervert-leohervert.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const isShowFixed = window.scrollY > 160
      setShowFixed(isShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List fixed={fixed}>
      {loading
        ? (
          <ListOfSkeletonCategories />
          )
        : (
            categories.map(category => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
          )}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
