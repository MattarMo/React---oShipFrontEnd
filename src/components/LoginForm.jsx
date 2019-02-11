import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    alert(
      'UserName: \n' +
        this.state.username +
        '\nPassWord:\n' +
        this.state.password
    );
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron align-items-center">
              <h1>
                <center>LOG IN</center>
              </h1>
              <form onSubmit={this.handleSubmit}>
                <label>
                  UserName:
                  <br />
                  <input
                    type="text"
                    name="username"
                    value={this.state.loginInfo}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <br />
                  <input
                    type="text"
                    name="password"
                    value={this.state.loginInfo}
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
