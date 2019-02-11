import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <center>
                <b>Hello World, you are in the {NODE_ENV} environment!!!</b>
              </center>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}
