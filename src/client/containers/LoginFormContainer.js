import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import LoginForm from '../components/LoginForm';

export default class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      auth: false,
      errorMessage: '',
    };
  }

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  onClick = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const hashDigest = Base64.stringify(sha256(this.state.password));

    axios({
      method: 'post',
      url: '/login',
      data: {
        userName: this.state.userName,
        password: hashDigest,
      },
    })
      .then((res) => {
        this.setState({
          auth: true,
        });
      })
      .catch((err) => {
        this.setState({
          auth: false,
          errorMessage: 'error',
        });
      });
  }

  render() {
    const {
      userName,
      password,
      auth,
      errorMessage,
    } = this.state;
    return (
      auth ?
        <Redirect to='/app' /> :
        <LoginForm
          onClick={this.onClick}
          handleUserName={this.handleUserName}
          handlePassword={this.handlePassword}
          userName={userName}
          password={password}
          errorMessage={errorMessage}
        />
    );
  }
}
