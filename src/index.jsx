import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import './styles/index.scss';

const app = {
  <BrowserRouter>
    <Root />
  </BrowserRouter>
};

render(app, document.getElementById('app'));
