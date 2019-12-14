import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from "react-router-dom";
import './header.scss';

const Header = () => (
  <div className="app-header">
    <nav className="navbar navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faClipboardList} />
        Karya Suchi <span>(Task List)</span>
      </Link>
      <div className="navbar-expand">
        <div className="navbar-nav">
          <NavLink to="/tasks" className="nav-item nav-link">Tasks</NavLink>
          {/* <NavLink to="/auth/login" 
            className="nav-item nav-link" 
            title="Sign out">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </NavLink>
          <NavLink to="/auth/login" 
            className="nav-item nav-link" 
            title="Sign in">
            <FontAwesomeIcon icon={faSignInAlt} />
          </NavLink> */}
        </div>
      </div>
    </nav>
  </div>
);

export default Header;