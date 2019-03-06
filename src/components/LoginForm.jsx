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

  handleSubmit(e) {
    console.log(
      'UserName: \n' +
        this.state.username +
        '\nPassWord:\n' +
        this.state.password
    );
    e.preventDefault();
  }
  render() {
    return (
      <body className="container">
        <form className="align-content-center">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <br />
            <input
              className="form-control"
              input-lg
              type="text"
              name="username"
              value={this.state.loginInfo}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              className="form-control"
              input-lg
              type="text"
              name="password"
              value={this.state.loginInfo}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </body>
    );
  }
}
