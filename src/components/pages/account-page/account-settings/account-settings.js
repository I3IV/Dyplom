import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../account-page.css';
import Spinner from "components/spinner";


export default class AccountSettings extends Component {
  state={
    save: false,
    disabled: true,
  };

  saveButton = () => {
    const oldState  = {...this.state};
    return this.setState({
      save: !oldState.save,
      disabled: !oldState.disabled
    });
  }
  render() {
    const saveButton = this.state.save ? 'Save' : 'Edit';
    if(!this.props.user){
      return <Spinner/>
    }
    return(
      <Paper className="account-setting" elevation={15}>
        <div className="setting-form">
          <TextField
            disabled={this.state.disabled}
            className="input"
            label="Name"
            margin="normal"
            variant="outlined"
            type="text"
            defaultValue={this.props.user.CustName}
          />
          <TextField
            disabled={this.state.disabled}
            className="input"
            label="Surname"
            margin="normal"
            variant="outlined"
            type="text"
            defaultValue={this.props.user.CustSurname}
          />
          <TextField
            disabled={this.state.disabled}
            className="input"
            label="Email"
            margin="normal"
            variant="outlined"
            type="email"
            defaultValue={this.props.user.email}
          />
          <TextField
            disabled={this.state.disabled}
            className="input"
            label="Phone Nubmer"
            margin="normal"
            variant="outlined"
            type="text"
            defaultValue={this.props.user.CustPhone}
          />
          <TextField
            disabled={this.state.disabled}
            className="input"
            label="Password"
            margin="normal"
            variant="outlined"
            type="password"
            defaultValue="illia.sydun"
          />
        </div>
        <div className="setting-form-buttons">
          <Button className="button" onClick={this.saveButton}>{saveButton}</Button>
        </div>
      </Paper>
    );
  }
}
