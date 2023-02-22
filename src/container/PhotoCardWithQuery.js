import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from '@apollo/client'
import { Query } from '@apollo/client/react/components'
const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
const renderProp = ({ loading, error, data }) => {
  if (loading) return 'Cargando...'
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query variables={{ id }} query={GET_SINGLE_PHOTO}>
    {renderProp}
  </Query>
)
