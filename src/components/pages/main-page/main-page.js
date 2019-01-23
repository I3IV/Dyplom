import React, { Component } from "react";

import Header from "../../shared-components/header";
import Choice from "./choice";
import Footer from "./footer";

import "./main-page.css";
import client from "../../../node_modules/feathers/client";

export default class MainPage extends Component {
  render() {
    console.log(this.props.user, 'main')
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

    return (
      <div className="main_page">
        <Header
          user={this.props.user}
          handleClose={this.props.handleClose}
        />
        <Choice choiceItems={choiceItems} />
        <Footer footerItems={footerItems} />
      </div>
    );
  }
}
