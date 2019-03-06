import React, { Component } from 'react';
//import LoginForm from './LoginForm.jsx';
//import Calc from './Calc.jsx';
//import Header from '../Navigation/Header.jsx';
import Layout from './Layout.jsx';
import Main from './Containers/Main';
//import { Route, Switch } from 'react-router-dom';
import '../styles/index.scss';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Main />
        </Layout>
      </div>
    );
  }
}
