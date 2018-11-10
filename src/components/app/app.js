import React, { Component } from 'react';
import { MuiThemeProvider} from '@material-ui/core/styles';

import './app.css';
import muiTheme from './muiTheme';

import MainPage from '../pages/registration-page';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="app">
          <MainPage />
        </div>
      </MuiThemeProvider>
    );
  }
};
