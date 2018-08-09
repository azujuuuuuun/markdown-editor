import React from 'react';
import Header from '../containers/HeaderContainer';
import Footer from './Footer';
import LoginForm from '../containers/LoginFormContainer';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginPage;
