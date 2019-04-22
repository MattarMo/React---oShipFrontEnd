import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';
import Header from '../Navigation/Header.jsx';
import About from '../components/About.jsx';
import HomeLayout from '../components/HomeLayout.jsx';
import { Route } from 'react-router-dom';
import ItemListView from '../components/ItemListView.jsx';
import CreateRequestForm from '../components/CreateRequestForm.jsx';
import BecomeDriverForm from '../components/BecomeDriverForm.jsx';

class Core extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <Route exact path="/" component={HomeLayout} />
        <Route path="/login-form" component={LoginForm} />
        <Route path="/signup-form" component={SignupForm} />
        <Route path="/about" component={About} />
        <Route path="/list-view" component={ItemListView} />
        <Route path="/createrequest-form" component={CreateRequestForm} />
        <Route path="/becomedriver-form" component={BecomeDriverForm} />
      </div>
    );
  }
}

export default Core;
