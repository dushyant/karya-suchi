import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import './../App.scss';

// Components
import Header from '../components/layout/Header';
import Tasks from '../components/task/Tasks';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import TaskForm from '../components/task/TaskForm';
import { NotFound } from '../components/layout/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();
console.log("History", history);

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Switch>
            <PublicRoute path="/" exact={true} component={Login} />
            <PrivateRoute path="/tasks" exact={true} component={Tasks} />
            <PrivateRoute path="/tasks/new" component={TaskForm} />
            <PrivateRoute path="/tasks/:id" component={TaskForm} />
            <PublicRoute path="/auth/login" component={Login} />
            <PublicRoute path="/auth/register" component={Register} />
            <Route path="**" component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
