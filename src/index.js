import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Welcome from './components/welcome';

import Chat from './components/chat';

// secure a protect route
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
// import { AUTH_USER } from './actions/types';

// create the store first
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

// if we have token consider user signed in
// const token = localStorage.getItem('token');
// if(token) store.dispatch({ type: AUTH_USER });

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>
        <Route path="chat" component={Chat} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
