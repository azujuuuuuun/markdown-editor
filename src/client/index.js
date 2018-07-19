import React from 'react';
import ReactDOM from 'react-dom';
import TopPage from './components/TopPage';
import SignUpPage from './components/SignUpPage';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={TopPage} />
      <Route path='/signup' component={SignUpPage} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
