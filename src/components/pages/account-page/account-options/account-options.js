import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import '../account-page.css';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';


export default class AccountOptions extends Component {
  render() {
    return(
      <Paper className="account-settings" elevation={15}>
        <MenuList>
          <Link to='/account/settings'>
            <MenuItem>
              <span>Account Settings</span>
            </MenuItem>
          </Link>
          <Link to='/account/payment-method'>
            <MenuItem>
              <span>Payment Method</span>
            </MenuItem>
          </Link>
          <Link to='/account/delivery-options'>
            <MenuItem>
              <span>Delivery Options</span>
            </MenuItem>
          </Link>
          <Link to='/account/statistics'>
            <MenuItem>
              <span>Statistics</span>
            </MenuItem>
          </Link>
        </MenuList>
      </Paper>
    );
  }
}
