import React from 'react';

import Header from '../../shared-components/header';
import Choice from './choice';
import Footer from './footer';

import './main-page.css';

const MainPage = (props) => {

  const navItems = [
    {label: 'Join us', link: '/'},
    {label: 'Contact', link: '/'},
    {label: 'Login', link: '/login'},
    {label: 'Registration', link: '/registration'}
  ];

  const choiceItems = [
    {label: 'Restaurants', classN: 'restaurant'},
    {label: 'Food', classN: 'food'}
  ];

  const footerItems = [
    {label: 'About us'},
    {label: 'FAQ'},
    {label: 'Need help?'},
    {label: 'Carreer'},
    {label: 'Catering'}
  ];
  return (
    <div className="main_page">
      <Header navItems={ navItems } />
        <Choice choiceItems = { choiceItems }/>
      <Footer footerItems={ footerItems }/>
    </div>
  );
}
export default MainPage;
