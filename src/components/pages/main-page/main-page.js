import React, { Component } from "react";

import Header from "../../shared-components/header";
import Choice from "./choice";
import Footer from "./footer";

import "./main-page.css";
import client from "../../../node_modules/feathers/client";

export default class MainPage extends Component {
  state = {
    user: null
  };

  componentDidMount() {
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
      .catch(function(error) {
        console.error("Error authenticating!", error);
      });
  }

  handleClose = () => {
    client.logout();
    this.setState({
      user: null
    });
  };

  render() {
    const { user } = this.state;
    const CustName = user ? user.CustName : "";
    const navItems = [
      { label: "Login", link: "/login" },
      { label: "Registration", link: "/registration" }
    ];

    const navLoggedIn = [{ label: "Account", link: "/account" }];

    const loggedIn = {
      username: CustName
    };

    const choiceItems = [
      { label: "Restaurants", classN: "restaurant", link: "restaurants" },
      { label: "Food", classN: "food", link: "dishes" }
    ];

    const footerItems = [
      { label: "About us" },
      { label: "FAQ" },
      { label: "Need help?" },
      { label: "Carreer" },
      { label: "Catering" }
    ];

    let nav = user ? navLoggedIn : navItems;
    return (
      <div className="main_page">
        <Header
          navItems={nav}
          handleClose={this.handleClose}
          loggedIn={loggedIn}
        />
        <Choice choiceItems={choiceItems} />
        <Footer footerItems={footerItems} />
      </div>
    );
  }
}
