import React, { Component } from 'react';
import Core from './Core.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Core} />
        </Switch>
      </BrowserRouter>
    );
  }
}
