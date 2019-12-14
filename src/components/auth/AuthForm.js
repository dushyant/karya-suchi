import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './auth.scss';

const propTypes = {
  btnLabel: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

const defaultProps = {
  btnLabel: 'Submit',
  onFormSubmit: () => {}
};

export default class AuthForm extends Component {

  state = {
    email: '',
    password: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  handleChange = (e) => {   
    this.setState({
      [e.target.type] : e.target.value
    })
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="inputEmail1">Email address</label>
            <input
              id="inputEmail"
              type="email"
              className="form-control"
              placeholder="Email address"
              onChange={this.handleChange}
            />
            {/* <div className="alert alert-danger">
              Invalid email format
            </div> */}
          </div>

          <div className="form-group">
            <label htmlFor="inputPassword">Passwod</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
              {/* <div className="alert alert-danger">
                Password is required
              </div> */}
          </div>

          <div className="auth-form__action">
            <button type="submit" className="btn btn-primary">
              {this.props.btnLabel}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

AuthForm.propTypes = propTypes;
AuthForm.defaultProps = defaultProps;