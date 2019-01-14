import React, { Component } from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../registration-page.css";
import client from "feathers/client";
import { Redirect } from "react-router-dom";

class RegistrationForm extends Component {
  state = {
    isLoggedIn: false
  };
  login() {
    const { email, password } = this.state;

    return client
      .authenticate({
        strategy: "local",
        email,
        password
      })
      .then(() => {
        this.setState({ error: null, isLoggedIn: true });
      });
  }
  signup() {
    const { email, password, CustName, CustSurname, CustPhone } = this.state;

    return client
      .service("customers")
      .create({
        email,
        password,
        CustName,
        CustSurname,
        CustPhone,
        BlockedUser: false,
        City_id: 1
      })
      .then(() => this.login())
      .catch(error => {
        this.setState({ error });
      });
  }
  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }
  render() {
    if (this.state.isLoggedIn) return <Redirect to="/" />;
    return (
      <div className="form">
        <Paper className="paper-form" elevation={15}>
          <span className="label">Registration</span>
          <p>{this.state.error && "Something wrong"}</p>
          <div className="row">
            <TextField
              className="input"
              label="Name"
              margin="normal"
              variant="outlined"
              placeholder="Illia"
              onChange={ev => this.updateField("CustName", ev)}
            />
            <span className="br" />
            <TextField
              className="input"
              label="Surname"
              margin="normal"
              variant="outlined"
              placeholder="Sydun"
              onChange={ev => this.updateField("CustSurname", ev)}
            />
          </div>
          <div className="row">
            <TextField
              className="input"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              placeholder="illia.sydun@gmail.com"
              onChange={ev => this.updateField("email", ev)}
            />
            <span className="br" />
            <TextField
              className="input"
              label="Phone Number"
              margin="normal"
              variant="outlined"
              type="phone"
              placeholder="+48 733 423 688"
              onChange={ev => this.updateField("CustPhone", ev)}
            />
          </div>
          <div className="row">
            <TextField
              className="input"
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              placeholder="secretPassword"
              onChange={ev => this.updateField("password", ev)}
            />
            <span className="br" />
            <TextField
              className="input"
              label="Confirm Password"
              margin="normal"
              variant="outlined"
              type="password"
              placeholder="passwordpass"
              onChange={ev => this.updateField("confirmPassword", ev)}
            />
          </div>
          <div className="buttons">
            <Button
              className="button"
              onClick={() => {
                this.signup();
              }}
            >
              Create account
            </Button>
            <Link to="/login">Already have one?</Link>
          </div>
        </Paper>
      </div>
    );
  }
}

export default RegistrationForm;
