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

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <MuiThemeProvider theme={muiTheme}>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/restaurants/:id" component={RestaurantPage} />
          </MuiThemeProvider>
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/dishes" component={DishesPage} />
          <Route path="/scheduler" component={ScheduleItems} />
        </React.Fragment>
      </Router>
    );
  }
}
