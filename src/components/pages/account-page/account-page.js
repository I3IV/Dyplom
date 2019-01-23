import React, { Component } from "react";

import Header from "../../shared-components/header";
import AccountOptions from "./account-options";
import AccountSettings from "./account-settings";
import AccountStatistics from "./account-statistics";
import AccountPaymentMethod from "./account-payment-method";
import AccountDeliveryOptions from "./account-delivery-options";
import Footer from "./footer";
import { Route } from "react-router-dom";

import "./account-page.css";
import client from "feathers/client";
import Spinner from "components/spinner";

export default class AccountPage extends Component {
  render() {
    const footerItems = [
      { label: "About us" },
      { label: "FAQ" },
      { label: "Need help?" },
      { label: "Carreer" },
      { label: "Catering" }
    ];

    return (
      <div className="account_page">
        <Header
          user={this.props.user}
          handleClose={this.props.handleClose}
        />
        <div className="account_settings">
          <AccountOptions />
          <Route path="/account/settings" render={() => <AccountSettings user={this.props.user}/>} />
          <Route
            path="/account/payment-method"
            component={AccountPaymentMethod}
          />
          <Route path="/account/statistics" component={AccountStatistics} />
          <Route path="/account/scheduler" component={AccountDeliveryOptions} />
        </div>
        <Footer footerItems={footerItems} />
      </div>
    );
  }
}
