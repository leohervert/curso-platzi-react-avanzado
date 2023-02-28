import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export default () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout
      title='Tu usuario'
      subtitle='Aqui puedes encontrar la configuración del usuario actual'
    >
      <SubmitButton onClick={removeAuth}>Cerrar sesíon</SubmitButton>
    </Layout>
  )
}
