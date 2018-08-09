import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import rootReducer from './reducers';
import App from './components/App';
import TopPage from './components/TopPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={TopPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/app' component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
