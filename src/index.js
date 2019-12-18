import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './router/App';
import * as serviceWorker from './serviceWorker';

// Third-party
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { firebase } from './config/firebaseConfig';
import { history } from './router/App';
import { fetchTasks } from './store/actions/taskAction'

const store = configureStore();

console.log(JSON.stringify(store.getState()));

const rootProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      rootProvider, 
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

ReactDOM.render(
  <div className="loading">
    <FontAwesomeIcon className="rotate" icon={faSpinner} />
    <span>Loading</span>
  </div>, 
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { uid } = user;
    store.dispatch({type: 'LOGIN', uid});
    store.dispatch(fetchTasks()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/tasks');
      }
    });
  } else {
    // store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
