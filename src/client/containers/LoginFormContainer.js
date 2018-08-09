import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
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
        const token = res.data;
        localStorage.setItem('token', token);
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
    } = this.state;
    return (
      <LoginForm
        onClick={this.onClick}
        handleUserName={this.handleUserName}
        handlePassword={this.handlePassword}
        userName={userName}
        password={password}
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer));
