import React from 'react';
import { Link } from 'react-router-dom'; //use Link instead of <a

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        <img src={'../assets/images/OShip_Icon_v4.png'} alt="Sample avatar" />
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
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login-form" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup-form" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/list-view" className="nav-link">
              My Requests
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/becomedriver-form" className="nav-link">
              Become Driver
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
