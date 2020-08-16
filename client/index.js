import './assets/sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from "@apollo/react-hooks";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';
import App from './src/App';
import { createUploadLink } from 'apollo-upload-client';

const cache = new InMemoryCache();
const link = new createUploadLink({
  uri: "/graphql"
});


const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(link),
  cache
});


const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={client}>
          <App/>
      </ApolloProvider>
    </Provider>,
    document.getElementById('root')
  );