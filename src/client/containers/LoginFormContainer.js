import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import LoginForm from '../components/LoginForm';
import {login} from '../actions';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
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
        this.props.login(true);
      })
      .catch((err) => {
        this.props.login(false);
      });
  }

  render() {
    const {
      userName,
      password,
      errorMessage,
    } = this.state;
    const {auth} = this.props;
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

const mapStateToProps = (state) => ({
  auth: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (auth) => dispatch(login(auth)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
