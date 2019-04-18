import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';
import Header from '../Navigation/Header.jsx';
import About from '../components/About.jsx';
import HomeLayout from '../components/HomeLayout.jsx';
import { Route } from 'react-router-dom';
import DisplayAddPersons from '../components/DisplayAddPersons.jsx';

class Core extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomeLayout} />
        <Route path="/login-form" component={LoginForm} />
        <Route path="/signup-form" component={SignupForm} />
        <Route path="/about" component={About} />
        <Route path="/api" component={DisplayAddPersons} />
      </div>
    );
  }
}

export default Core;
