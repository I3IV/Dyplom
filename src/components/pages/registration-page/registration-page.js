import React from 'react';

import Header from '../../shared-components/header';
import RegistrationForm from './registration-form';

import './registration-page.css';

const RegistrationPage = () => {

  return (
    <div className="registration_page">
      <Header/>
      <RegistrationForm />
    </div>
  );
}
export default RegistrationPage;
