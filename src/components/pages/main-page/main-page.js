import React from 'react';

import Header from '../../shared-components/header';
import Choice from './choice';
import Footer from './footer';

const MainPage = (props) => {

  const navItems = [
    {label: 'Join us'},
    {label: 'Contact'},
    {label: 'Login'},
    {label: 'Registration'}
  ];

  const choiceItems = [
    {label: 'Restauracje', classN: 'restaurant'},
    {label: 'Jedzenie', classN: 'food'}
  ];

  const footerItems = [
    {label: 'About us'},
    {label: 'FAQ'},
    {label: 'Need help?'},
    {label: 'Carreer'},
    {label: 'Catering'}
  ];
  return (
    <React.Fragment>
      <Header navItems={ navItems } />
      <Choice choiceItems = { choiceItems }/>
      <Footer footerItems={ footerItems }/>
    </React.Fragment>
  );
}
export default MainPage;
