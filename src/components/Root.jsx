import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import Calc from './Calc.jsx';
import NavBar from './NavBar.jsx';
import '../styles/index.scss';

export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Calc />
          </div>
        </div>
      </div>
    );
  }
}
