import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'

export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)
