import { gql } from '@apollo/client'
import { graphql } from '@apollo/client/react/hoc'

const GET_PHOTOS = gql`
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
`
export const withPhotos = graphql(GET_PHOTOS)
