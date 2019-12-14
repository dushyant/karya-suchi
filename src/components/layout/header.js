import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from "react-router-dom";
import './header.scss';

const Header = () => (
  <div className="app-header">
    <nav className="navbar navbar-dark bg-primary">
      <Link to="/" className="navbar-brand">
        <FontAwesomeIcon icon={faCalendarCheck} />
        Daily Planner
      </Link>
      <div className="navbar-expand">
        <div className="navbar-nav">
          <NavLink to="/myday" className="nav-item nav-link">My Day</NavLink>
          <NavLink to="/tasks" className="nav-item nav-link">Tasks</NavLink>
          <NavLink to="/meals" className="nav-item nav-link">Meals</NavLink>
          <NavLink to="/exercises" className="nav-item nav-link">Exercises</NavLink>
          <NavLink to="/auth/login" 
            className="nav-item nav-link" 
            title="Sign out">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </NavLink>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;