import React from 'react';
import {Redirect} from 'react-router-dom';
import SignUp from '../components/SignUp';

export default class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
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

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  }

  render() {
    const {
      userName,
      email,
      password,
      auth,
      errorMessage,
    } = this.state;
    return (
      auth ?
        <Redirect to='/app' /> :
        <SignUp
          onClick={this.onClick}
          handleUserName={this.handleUserName}
          handleEmail={this.handleEmail}
          handlePassword={this.handlePassword}
          userName={userName}
          email={email}
          password={password}
          errorMessage={errorMessage}
        />
    );
  }
}
