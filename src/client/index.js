import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import rootReducer from './reducers';
import Auth from './containers/AuthContainer';
import Routing from './containers/RoutingContainer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth>
        <Routing />
      </Auth>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
