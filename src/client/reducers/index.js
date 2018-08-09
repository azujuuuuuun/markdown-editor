import {combineReducers} from 'redux';

const login = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.auth;
    default:
      return state;
  }
};

export default combineReducers({
  login,
});
