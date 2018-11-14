import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../account-page.css';


export default class AccountDeliveryOptions extends Component {
  state={
    save: false,
    disabled: true
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

    return(
      <Paper className="account-setting" elevation={15}>
        <div className="setting-form">
          Delivery Options
        </div>
        <div className="setting-form-buttons">
          <Button className="button" onClick={this.saveButton}>{saveButton}</Button>
        </div>
      </Paper>
    );
  }
}
