import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { createUser } from '../../store/actions/authAction';
import './auth.scss';

class Register extends Component {

  registerHandler = (user) => {
    console.log("Register user", user);
    this.props.createUser(user);
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

export default connect(null, { createUser })(Register);