import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
const client = new ApolloClient({
  uri: 'https://petgran-server-lhervert-leohervert.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
)
