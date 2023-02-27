import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../container/LoginMutation'
import { Context } from '../Context'

export const SignIn = () => {
  const { activateAuth } = useContext(Context)
  return (
    <LoginMutation>
      {(login, { data, loading, error }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          login({ variables }).then(({ data }) => {
            const { login } = data
            activateAuth(login)
          })
        }

        const errorMessage =
          error && 'La contraseña no es correcta o el usuario no existe.'

        return (
          <UserForm
            disabled={loading}
            error={errorMessage}
            title='Iniciar Sesión'
            onSubmit={onSubmit}
          />
        )
      }}
    </LoginMutation>
  )
}
