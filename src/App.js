import React, { useContext, Suspense, lazy } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

const Home = lazy(() => import('./pages/Home'))
const Detail = lazy(() => import('./pages/Detail'))
const Favs = lazy(() => import('./pages/Favs'))
const User = lazy(() => import('./pages/User'))
const SignUp = lazy(() => import('./pages/Signup'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  )
}
