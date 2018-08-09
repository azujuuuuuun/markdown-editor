import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';
import SignUp from '../components/SignUp';
import {login} from '../actions';

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
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

  onClick = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const hashDigest = Base64.stringify(sha256(this.state.password));

    axios({
      method: 'post',
      url: '/signup',
      data: {
        userName: this.state.userName,
        email: this.state.email,
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
      email,
      password,
    } = this.state;
    const {auth} = this.props;
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
)(SignUpContainer);
