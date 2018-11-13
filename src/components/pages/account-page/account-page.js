import React, { Component } from 'react';

import Header from '../../shared-components/header';
import AccountSetting from './account-setting';
import AccountSettings from './account-settings';
import Footer from './footer';

import './account-page.css';

export default class AccountPage extends Component {

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

    const footerItems = [
      {label: 'About us'},
      {label: 'FAQ'},
      {label: 'Need help?'},
      {label: 'Carreer'},
      {label: 'Catering'}
    ];

    let nav = this.state.isLoggedIn ? navLoggedIn : navItems;
    return (
      <div className="account_page">
        <Header
          navItems={ nav }
          handleClose={this.handleClose}
          loggedIn={loggedIn} />
        <div className="account_settings">
          <AccountSettings />
          <AccountSetting />
        </div>
        <Footer footerItems={ footerItems }/>
      </div>
    );
  }


}
