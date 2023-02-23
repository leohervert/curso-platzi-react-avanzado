import React from 'react'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
      <NavBar />
    </>
  )
}
