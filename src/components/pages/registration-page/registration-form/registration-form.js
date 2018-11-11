import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../registration-page.css';


class RegistrationForm extends Component {
  render() {
    return(
      <div className="form">
        <Paper className="paper-form" elevation={15}>
          <span className="label">Registration</span>
          <div className="row">
            <TextField
              className="input"
              label="Name"
              margin="normal"
              variant="outlined"
              value="Illia"
            />
          <span className="br"></span>
            <TextField
                className="input"
                label="Surname"
                margin="normal"
                variant="outlined"
                value="Sydun"
              />
          </div>
          <div className="row">
            <TextField
              className="input"
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              value="illia.sydun@gmail.com"
              />
            <span className="br"></span>
            <TextField
              className="input"
              label="Phone Number"
              margin="normal"
              variant="outlined"
              type="phone"
              value="+48 733 423 688"
              />
          </div>
          <div className="row">
            <TextField
              className="input"
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              value="passwordpass"
              />
            <span className="br"></span>
            <TextField
              className="input"
              label="Confirm Password"
              margin="normal"
              variant="outlined"
              type="password"
              value="passwordpass"
              />
          </div>
        <div className="buttons">
          <Button className="button">Create account</Button>
          <Link to="/login">Already have one?</Link>
        </div>

        </Paper>
      </div>
    );
  }
}

export default RegistrationForm;
