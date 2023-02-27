import React from 'react'
import { Link } from 'react-router-dom'
import { SignIn } from './SignIn'

export const NotRegisteredUser = () => (
  <>
    <SignIn />
    <span>
      No tienes cuenta?
      <Link to='/signup'> Registrate!</Link>
    </span>
  </>
)
