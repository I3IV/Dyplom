import React, { Component } from 'react';

import Header from '../../shared-components/header';
import Choice from './choice';
import Footer from './footer';

import './main-page.css';

export default class MainPage extends Component {

  state = {
    isLoggedIn: true
  };

  handleClose = () => {
    const oldState = this.state.isLoggedIn;
    const newState = !oldState;
    return this.setState({isLoggedIn: newState});
  };

  render() {
    const navItems = [
      {label: 'Login', link: '/login'},
      {label: 'Registration', link: '/registration'}
    ];

    const navLoggedIn = [
      {label: 'Account', link: '/account'}
    ];

    const loggedIn = {
      username: 'illia.sydun'
    };

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

    let nav = this.state.isLoggedIn ? navLoggedIn : navItems;
    return (
      <div className="main_page">
        <Header
          navItems={ nav }
          handleClose={this.handleClose}
          loggedIn={loggedIn} />
          <Choice choiceItems = { choiceItems }/>
        <Footer footerItems={ footerItems }/>
      </div>
    );
  }


}
