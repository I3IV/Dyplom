import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../login-page.css';


export default class LoginForm extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return(
      <div className="form">
        <Paper className="paper-form" elevation={15}>
          <span className="label">Log in</span>
          <TextField
          className="input"
          label="Email"
          margin="normal"
          variant="outlined"
          value="illia.sydun@gmail.com"
        />
        <TextField
            className="input"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            value="passwordpass"
          />
          <div className="buttons">
            <Button className="button">Log in</Button>
            <a href="localhost:3000"
               onClick={this.handleClickOpen}>
              Forgot your password?</a>
            <Link to="/registration">Don't have one?</Link>
          </div>

          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">Reset password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To reset your password, please enter your email address here. We will send
                you confirmation link.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button className="button"
                      onClick={this.handleClose}>
                Cancel
              </Button>
              <Button className="button"
                      onClick={this.handleClose}>
                Confirm
              </Button>
            </DialogActions>
        </Dialog>

        </Paper>
      </div>
    );
  }
}
