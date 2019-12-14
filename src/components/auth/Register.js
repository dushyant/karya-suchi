import React, { Component } from 'react'
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import './auth.scss';

export default class Register extends Component {

  registerHandler = (user) => {
    console.log("Register user", user);
  }

  render() {
    return (
      <div className="auth-form card border-primary">
        <div className="card-header text-primary">
          <h1>Register</h1>
        </div>
        <AuthForm btnLabel="Register" onFormSubmit={this.registerHandler} />
        <div className="card-footer bg-transparent border-primary">
          <Link to="/auth/login">Already have an account?</Link>
        </div>
      </div>
    )
  }
}
