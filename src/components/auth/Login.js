import React, { Component } from 'react'
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { loginUser, loginAnonymously } from '../../store/actions/authAction';
import './auth.scss';

class Login extends Component {

  loginHandler = (user) => {
    console.log("Login user", user);
    this.props.loginUser(user);
  }

  render() {
    return (
      <div className="auth-form card border-primary">
        <div className="card-header text-primary">
          <h1>Login</h1>
        </div>
        <AuthForm btnLabel="Login" onFormSubmit={this.loginHandler} />
        <div className="card-footer bg-transparent border-primary">
          <Link className="btn btn-light mr-2" to="/auth/register">Click here to Register</Link>
          <button className="btn btn-light" onClick={this.props.loginAnonymously}>Guest Login</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { loginUser, loginAnonymously })(Login)