import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TopPage from './components/TopPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={TopPage} />
      <Route path='/signup' component={SignUpPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/app' component={App} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
