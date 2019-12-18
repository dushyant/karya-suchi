import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


export const NotFound = () => (
  <Fragment>
    <h1>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      404 - Page not found :(
    </h1>
    <p>
      <Link to="/" className="navbar-brand">
        Login page
      </Link>
    </p>
  </Fragment>
);