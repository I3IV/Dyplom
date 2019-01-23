import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import "./app.css";
import muiTheme from "./muiTheme";

import MainPage from "../pages/main-page";
import RegistrationPage from "../pages/registration-page";
import LoginPage from "../pages/login-page";
import AccountPage from "../pages/account-page";
import RestaurantsPage from "components/pages/restaurants-page";
import RestaurantPage from "components-vitalii/restaurant-page";
import DishesPage from "components/pages/dishes-page";
import ScheduleItems from "components/pages/schedule-items";
import Header from "components/shared-components/header";
import client from "feathers/client";
import Spinner from "components/spinner";

export default class App extends Component {
  state={
    user: null
  };

  handleClose = () => {
    client.logout();
    this.setState({
      user: null
    });
  };
  componentWillMount() {
    client
        .authenticate()
        .then(response => {
          return client.passport.verifyJWT(response.accessToken);
        })
        .then(payload => {
          return client.service("customers").get(payload.userId);
        })
        .then(user => {
          this.setState({ user });
        })
        .catch(error => {
          console.info("Error authenticating!", error);
        });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <MuiThemeProvider theme={muiTheme}>
            <Route path="/" render={() => <MainPage user={this.state.user} handleClose={this.handleClose}/>} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/account" render={() => <AccountPage user={this.state.user} handleClose={this.handleClose}/>} />
            <Route path="/restaurants/:id" render={() => <RestaurantPage user={this.state.user} handleClose={this.handleClose}/>} />
          </MuiThemeProvider>
          <Route exact path="/restaurants" render={() => <RestaurantsPage user={this.state.user} handleClose={this.handleClose}/>} />
          <Route path="/dishes" render={() => <DishesPage user={this.state.user} handleClose={this.handleClose}/>} />
          <Route path="/scheduler" render={() => <ScheduleItems user={this.state.user} handleClose={this.handleClose}/>} />
        </React.Fragment>
      </Router>
    );
  }
}
