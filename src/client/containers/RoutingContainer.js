import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import App from '../components/App';
import TopPage from '../components/TopPage';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';

class RoutingContainer extends React.Component {
  render() {
    return (
      this.props.auth
        ?
        <Switch>
          <Route path='/app' component={App} />
          <Redirect to='/app' />
        </Switch>
        :
        <Switch>
          <Route exact path='/' component={TopPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/login' component={LoginPage} />
          <Redirect from='/app' to='/' />
        </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.login,
});

export default withRouter(connect(
  mapStateToProps,
)(RoutingContainer));
