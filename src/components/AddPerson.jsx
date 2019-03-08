import React, { Component } from 'react';
import axios from 'axios';

export default class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: ''
    };

    this.handlchange = this.handlchange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlchange(e) {
    this.state({ name: event.target.value });
  }

  handlsubmit(e) {
    e.preventDefault();

    const user = {
      name: this.State.name
    };

    axios
      .post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <label>
          Person Name
          <input type="text" name="name" onChange={this.handlechange} />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}
