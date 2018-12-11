import React from 'react';

import Header from '../../shared-components/header';
import LoginForm from './login-form';

import './login-page.css';

const LoginPage = () => {

  return (
    <div className="login_page">
      <Header/>
      <LoginForm />
    </div>
  );
}
export default LoginPage;
