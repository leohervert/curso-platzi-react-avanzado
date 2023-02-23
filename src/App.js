import React from 'react'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import Context from './Context'

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
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth
            ? (
              <Routes>
                <Route path='/favs' element={<Favs />} />
                <Route path='/user' element={<User />} />
              </Routes>
              )
            : (
              <Routes>
                <Route path='/favs' element={<NotRegisteredUser />} />
                <Route path='/user' element={<NotRegisteredUser />} />
              </Routes>
              )}
      </Context.Consumer>
      <NavBar />
    </>
  )
}
