import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import './auth.scss';

export default class Login extends Component {

  loginHandler = (user) => {
    console.log("Login user", user);
  }

  render() {
    return (
      <div className="auth-form card border-primary">
        <div className="card-header text-primary">
          <h1>Login</h1>
        </div>
        <AuthForm btnLabel="Login" onFormSubmit={this.loginHandler} />
        <div className="card-footer bg-transparent border-primary">
          <Link to="/auth/register">Not registered?</Link>
        </div>
      </div>
    )
  }
}

