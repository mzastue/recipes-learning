import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import client from './config/apolloClient';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Root = () => {
  return (
    <HashRouter>
      <Route path="/" component={App}>
      </Route>
    </HashRouter>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
