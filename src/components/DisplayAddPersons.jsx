import React, { Component } from 'react';
import AddPerson from './AddPerson.jsx';
import GetPersons from './GetPersons.jsx';

export default class DisplayAddPersons extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <GetPersons />
        </div>
        <div>
          <AddPerson />
        </div>
      </div>
    );
  }
}
