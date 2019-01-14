import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default class NavigationListItem extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { item, handleClose, loggedIn } = this.props;

    if (item.label === "Account") {
      return (
        <li>
          <span className="logged-username">{loggedIn.username}</span>
          <IconButton
            aria-label="More"
            aria-owns={anchorEl ? "long-menu" : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="primary"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <Link to="/account">
              <MenuItem>My Account</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </li>
      );
    } else {
      return (
        <li>
          <Link to={item.link}>
            <Button className="button">{item.label}</Button>
          </Link>
        </li>
      );
    }
  }
}
