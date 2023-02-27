import React, { useContext } from 'react'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'
import { SignUp } from './pages/Signup'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/pet/:id' element={<Home />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/login'
          element={isAuth ? <Navigate to='/' /> : <NotRegisteredUser />}
        />
        <Route
          exact
          path='/favs'
          element={isAuth ? <Favs /> : <Navigate replace to='/login' />}
        />
        <Route
          exact
          path='/user'
          element={isAuth ? <User /> : <Navigate replace to='/login' />}
        />
      </Routes>
      <NavBar />
    </>
  )
}
