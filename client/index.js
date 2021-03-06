import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: "http://localhost:1908/graphql"
});

// establishes socket connection
import './socket'

ReactDOM.render(
  <ApolloProvider client={ client }>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)
