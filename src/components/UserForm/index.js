import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Button, Container, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Container>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </Container>
  )
}
