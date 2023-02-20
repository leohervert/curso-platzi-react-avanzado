import styled from 'styled-components'
import { dropDown } from '../../styles/animation'
export const List = styled.ul`
  display: flex;
  overflow-x: auto;
  width: 100%;
  &.fixed {
    ${dropDown({ time: '1s', type: 'ease' })}
    background: #fff;
    border-radius: 50px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    max-width: 500px;
    padding: 10px;
    position: fixed;
    top: -20px;
    transform: scale(0.5);
    z-index: 1;
  }
`
export const Item = styled.li`
  padding: 0 8px;
`
