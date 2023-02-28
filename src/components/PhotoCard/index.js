import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from './useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
const DEFAULT_IMG =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMG }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {toggleLike => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } })
              }
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              )
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`)
    }
  }
}
