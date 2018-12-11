import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider} from '@material-ui/core/styles';

import './app.css';
import muiTheme from './muiTheme';

import MainPage from '../pages/main-page';
import RegistrationPage from '../pages/registration-page';
import LoginPage from '../pages/login-page';
import AccountPage from '../pages/account-page';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Router>
          <React.Fragment>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/account" component={AccountPage} />
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
};
