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
    e.preventDefault();
    console.log(
      'UserName: \n' +
        this.state.username +
        '\nPassWord:\n' +
        this.state.password
    );
  }
  render() {
    return (
      <div className="container">
        <div className="col-12" />
        <div className="card text-white border-primary mb-3 text-center">
          <div className="card-header bg-light text-dark">Login Form</div>
          <form className="align-content-center">
            <div className="card-body bg-secondary">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-group-lg btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
