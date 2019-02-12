import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import Calc from './Calc.jsx';
export default class Root extends Component {
  render() {
    return (
      <div className="container">
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
