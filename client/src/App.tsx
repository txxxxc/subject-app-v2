import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createApolloClient } from './utils/createApolloClient';
import theme from './utils/theme';

const client = createApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <MaterialThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <div>Hello React!!</div>
        </StyledThemeProvider>
      </MaterialThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById('app'));
