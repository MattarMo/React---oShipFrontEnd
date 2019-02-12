import React, { Component } from 'react';

export default class Calc extends Component {
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
    this.calculateTips = this.calculateTips.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculateTips(endingTicNum, startingTicNum, totalhours) {
    const carsParked = endingTicNum - startingTicNum;
    const tips = (carsParked * 4) / totalhours;

    return tips;
  }

  handleSubmit(e) {
    console.log(
      'Starting Ticket Number: \n' +
        this.state.startTicNum +
        '\nEnding Ticket Number:\n' +
        this.state.endingTicNum +
        '\nTotal Hours Worked:\n' +
        this.state.totalhours +
        '\nTotal Money Earned:\n' +
        this.state.totalmoney +
        '\nTips Earned:\n'
    );
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="jumbotron">
              <h1>
                <center>Get Tips</center>
              </h1>
              <center>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Starting Ticket Number:
                    <br />
                    <input
                      type="number"
                      name="startTicNum"
                      value={this.state.loginInfo}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Ending Ticket Number:
                    <br />
                    <input
                      type="number"
                      name="endingTicNum"
                      value={this.state.loginInfo}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Total Day Money:
                    <br />
                    <input
                      type="number"
                      name="totalmoney"
                      value={this.state.loginInfo}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Total Hours Worked:
                    <br />
                    <input
                      type="number"
                      name="totalhours"
                      value={this.state.loginInfo}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
