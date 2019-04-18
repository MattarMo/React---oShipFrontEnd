import React, { Component } from 'react';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMoney: '',
      totalhours: '',
      startingTicNum: '',
      endingTicNum: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateTips() {
    const { endingTicNum, startingTicNum, totalhours } = this.state;
    const carsParked = endingTicNum - startingTicNum;
    const tips = (carsParked * 4) / totalhours;

    return tips;
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      'Starting Ticket Number: \n' +
        this.state.startTicNum +
        '\nEnding Ticket Number:\n' +
        this.state.endingTicNum +
        '\nTotal Hours Worked:\n' +
        this.state.totalhours +
        '\nTotal Money Earned:\n' +
        this.state.totalMoney +
        '\nTips Earned:\n' +
        this.calculateTips()
    );
  }
  render() {
    return (
      <div className="col-12">
        <h1>
          <center>Sign Up</center>
        </h1>
        <center>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <br />
              <input
                type="number"
                name="startTicNum"
                value={this.state.startTicNum}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <br />
              <input
                type="password"
                name="endingTicNum"
                value={this.state.endingTicNum}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <br />
              <input
                type="email"
                name="totalMoney"
                value={this.state.totalMoney}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Street Number:
              <br />
              <input
                type="number"
                name="totalhours"
                value={this.state.totalhours}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              Street Name:
              <br />
              <input
                type="number"
                name="totalhours"
                value={this.state.totalhours}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>
              City:
              <br />
              <input
                type="number"
                name="totalhours"
                value={this.state.totalhours}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </center>
      </div>
    );
  }
}
