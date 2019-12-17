import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';

// Components
import Header from './components/layout/header';
import Task from './components/task/Tasks';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskForm from './components/task/TaskForm';
import { NotFound } from './components/layout/not-found';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-4">
          <Switch>
            <Route path="/" exact={true} component={Task} />
            <Route path="/tasks" exact component={Task} />
            <Route path="/tasks/new" component={TaskForm} />
            <Route path="/tasks/:id" component={TaskForm} />
            {/* <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} /> */}
            <Route path="**" component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
