import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { RegisterMutation } from '../container/RegisterMutation'
import { useNavigate } from 'react-router-dom'
export default () => {
  const { activateAuth } = useContext(Context)
  const navigate = useNavigate()
  return (
    <RegisterMutation>
      {(register, { data, loading, error }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password }
          const variables = { input }
          register({ variables }).then(({ data }) => {
            const { signup } = data
            activateAuth(signup)
            navigate('/')
          })
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
  )
}
