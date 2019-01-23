import React, { Component } from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../registration-page.css";
import client from "feathers/client";
import { Redirect } from "react-router-dom";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const strongRegexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
const strongRegexNameSurname = new RegExp("^(?=.*[a-z])(?=.*[A-Z])")
const strongRegexPhone = new RegExp("^(\\+(([0-9]){1,2})[-.])?((((([0-9]){2,3})[-.]){1,2}([0-9]{4,10}))|([0-9]{10}))$")

class RegistrationForm extends Component {
  state = {
    isLoggedIn: false,
    email: '',
    name: '',
    surname: '',
    phone: '',
    password: '',
    passwordpass: ''
  };

  componentDidMount(){
    ValidatorForm.addValidationRule('password', value => strongRegexPass.test(value))

    ValidatorForm.addValidationRule('name', value => strongRegexNameSurname.test(value))

    ValidatorForm.addValidationRule('surname', value => strongRegexNameSurname.test(value))

    ValidatorForm.addValidationRule('phone', value => strongRegexPhone.test(value))

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== this.state.password) {
            return false;
        }
        return true;
    });
  }

  login() {
    const { email, password } = this.state;
    console.log("logIn");

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
    const { email, password, name, surname, phone } = this.state;
    return client
      .service("customers")
      .create({
        email,
        password,
        CustName:name,
        CustSurname:surname,
        CustPhone:phone,
        City_id: 1
      })
      .then(() => this.login())
      .catch(error => {
        this.setState({ error });
      });
  }

  updateField = (ev) => {
     this.setState({ [ev.target.name]: ev.target.value });
   }

  handleSubmit = () => {
    this.signup();
  }

  render() {
    //this.state.error && console.log("ERROR", this.state.error.errors);

    if (this.state.isLoggedIn) return <Redirect to="/" />;
    return (
      <div className="form">
      <ValidatorForm
            ref="form"
            onSubmit={this.handleSubmit}
            onError={errors => console.log(errors)}
        >
        <Paper className="paper-form" elevation={15}>
          <span className="label">Registration</span>
          <p>{this.state.error && `Something wrong: ${this.state.error}`}</p>
          <div className="row">
            <TextValidator
              className="input"
              label="Name"
              value={this.state.name}
              name="name"
              type="name"
              margin="normal"
              variant="outlined"
              placeholder="Name"
              validators={['name','required']}
              errorMessages={['The name must contain lowercase and uppercase','Name is required']}
              onChange={this.updateField}
            />
            <span className="br" />
            <TextValidator
              className="input"
              label="Surname"
              type="Surname"
              margin="normal"
              variant="outlined"
              value={this.state.surname}
              name="surname"
              placeholder="Surname"
              validators={['surname','required']}
              errorMessages={['The surname must contain lowercase and uppercase','Surname is required']}
              onChange={this.updateField}
            />
          </div>
          <div className="row">
            <TextValidator
              className="input"
              label="Email"
              margin="normal"
              variant="outlined"
              value={this.state.email}
              name="email"
              placeholder="example@domain.com"
              validators={['required', 'isEmail']}
              errorMessages={['The email is required', 'Email is not valid']}
              onChange={this.updateField}
            />
            <span className="br" />
            <TextValidator
              className="input"
              label="Phone Number"
              margin="normal"
              variant="outlined"
              value={this.state.phone}
              name="phone"
              type="phone"
              validators={['phone','required']}
              errorMessages={['The phone must contain only numbers','Phone is required']}
              placeholder="+48 888 888 888"
              onChange={this.updateField}
            />
          </div>
          <div className="row">
            <TextValidator
              className="input"
              label="Password"
              margin="normal"
              variant="outlined"
              value={this.state.password}
              name="password"
              type="password"
              validators={['password','required']}
              errorMessages={['The password must contain lowercase, uppercase number','Password is required']}
              placeholder="Password"
              onChange={this.updateField}
            />
            <span className="br" />
            <TextValidator
              className="input"
              label="Confirm Password"
              margin="normal"
              variant="outlined"
              value={this.state.passwordpass}
              name="passwordpass"
              type="password"
              validators={['isPasswordMatch', 'required']}
              errorMessages={['password mismatch', 'this field is required']}
              placeholder="Confirm password"
              onChange={this.updateField}
            />
          </div>
          <div className="buttons">
            <Button
              className="button"
              type="submit"
              onClick={() => {
                this.signup();
              }}
            >
              Create account
            </Button>
            <Link to="/login">Already have one?</Link>
          </div>

        </Paper>
        </ValidatorForm>
      </div>
    );
  }
}

export default RegistrationForm;
