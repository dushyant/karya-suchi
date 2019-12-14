import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import { fetchTasks } from './store/actions/taskAction'

const store = configureStore();

console.log(JSON.stringify(store.getState()));

const rootProvider = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <p>Loading...</p>, 
  document.getElementById('root')
);
store.dispatch(fetchTasks()).then(() => {
  ReactDOM.render(
    rootProvider, 
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
