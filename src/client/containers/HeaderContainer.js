import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header';
import {login} from '../actions/index';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    const logout = window.confirm('ログアウトしますか？');
    if (logout) {
      localStorage.removeItem('token');
      this.props.login(false);
    }
  }

  render() {
    return (
      <Header
        auth={this.props.auth}
        onClick={this.onClick}
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
)(HeaderContainer));
