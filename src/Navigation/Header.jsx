import React from 'react';
import { Link } from 'react-router-dom'; //use Link instead of <a

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        React
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login-form" className="nav-link">
              Login form
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calc" className="nav-link">
              Valet Tip Calculator
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Make API Call
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
