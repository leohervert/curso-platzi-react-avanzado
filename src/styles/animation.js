import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '0.5s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(3px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`

export const dropDown = ({ time = '0.5s', type = 'ease' } = {}) => css`
  animation: ${time} ${dropDownKeyFrame} ${type};
`

const dropDownKeyFrame = keyframes`
  from{
    top: -70px;
  }

  to {
    top: -20px;
  }
`
