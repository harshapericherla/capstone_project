import './assets/sass/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from 'apollo-link-http';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';
import App from './src/App';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "/graphql"
});

const client = new ApolloClient({
  cache,
  link
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