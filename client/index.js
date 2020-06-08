import './assets/sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from 'apollo-link-http';
import App from './src/App';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    document.getElementById('root')
  );