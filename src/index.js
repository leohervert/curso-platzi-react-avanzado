import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import {
  ApolloClient,
  ApolloLink,
  from,
  ApolloProvider,
  HttpLink,
  InMemoryCache
} from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'https://petgran-server-lhervert-leohervert.vercel.app/graphql'
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location('/')
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorMiddleware, authMiddleware, httpLink])
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
