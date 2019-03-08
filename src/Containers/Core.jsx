import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Calc from '../components/Calc.jsx';
import Header from '../Navigation/Header.jsx';
import { Route } from 'react-router-dom';
import GetPersons from '../components/GetPersons.jsx';
//import { Route } from 'react-router-dom';

class Core extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/login-form" component={LoginForm} />
        <Route exact path="/calc" component={Calc} />
        <Route exact path="/api" component={GetPersons} />
      </div>
    );
  }
}

export default Core;
