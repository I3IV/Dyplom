import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './registration-form.css';


class RegistrationForm extends Component {
  render() {
    return(
      <div className="form">
        <Paper className="paper-form" elevation={15}>
          <span className="label">Registration</span>
          <div className="row">
            <TextField
              className="input"
              label="Email"
              margin="normal"
              variant="outlined"
              value="illia.sydun@gmail.com"
            />
          <span className="br"></span>
            <TextField
                className="input"
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value="passwordpass"
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
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              value="passwordpass"
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
              label="Password"
              margin="normal"
              variant="outlined"
              type="password"
              value="passwordpass"
              />
          </div>
        <div className="buttons">
          <Button className="button">Create account</Button>
          <a href="localhost:3000">Already have one?</a>
        </div>

        </Paper>
      </div>
    );
  }
}

export default RegistrationForm;
