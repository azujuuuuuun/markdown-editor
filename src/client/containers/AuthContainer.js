import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {login} from '../actions';

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (!this.props.auth && token) {
      axios({
        method: 'post',
        url: '/auth',
        data: {
          token: token,
        },
      })
        .then((res) => {
          this.props.login(true);
        })
        .catch((err) => {
          this.props.login(false);
        });
    }
  }

  render() {
    return this.props.children;
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
)(AuthContainer));
