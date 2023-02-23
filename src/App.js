import React from 'react'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId
        ? (
          <PhotoCardWithQuery id={detailId} />
          )
        : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pet/:id' element={<Home />} />
          </Routes>
          )}
    </>
  )
}
