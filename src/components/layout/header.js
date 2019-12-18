import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from '../../store/actions/authAction';
import './header.scss';

const Header = (props) => (
  <div className="app-header">
    <nav className="navbar navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faClipboardList} />
        Karya Suchi <span>(Task List)</span>
      </Link>
      <div className="navbar-expand">
        <div className="navbar-nav">
          <NavLink to="/tasks" className="nav-item nav-link">Tasks</NavLink>
          {
            props.isAuthenticated && (
              <button 
                className="btn nav-item nav-link"
                onClick={props.logoutUser}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            )
          }
        </div>
      </div>
    </nav>
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps, { logoutUser })(Header);