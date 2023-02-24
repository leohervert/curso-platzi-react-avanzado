import React from 'react'
import { UserForm } from '../components/UserForm'
import Context from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
              }

              const errorMessage =
                error && 'El usuario ya existe o hay algún problema.'

              return (
                <UserForm
                  disabled={loading}
                  error={errorMessage}
                  title='Registrarse'
                  onSubmit={onSubmit}
                />
              )
            }}
          </RegisterMutation>
          <LoginMutation>
            {(login, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(activateAuth)
              }
              console.log(error)
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
        </>
      )
    }}
  </Context.Consumer>
)
