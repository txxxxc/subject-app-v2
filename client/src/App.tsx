import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { createApolloClient } from '../utils/createApolloClient';


const client = createApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <div>Hello React!!</div>
    </ApolloHooksProvider>
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
