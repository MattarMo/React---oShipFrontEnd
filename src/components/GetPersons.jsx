import React, { Component } from 'react';
import axios from 'axios';
//import AddPerson from './AddPerson.jsx';

export default class GetPersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
