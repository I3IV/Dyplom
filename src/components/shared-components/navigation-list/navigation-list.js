import React from "react";

import "./navigation-list.css";
import NavigationListItem from "../navigation-list-item";
import Spinner from "components/spinner";

const NavigationList = ({user, handleClose, loggedIn }) => {
let navItems = [
    { label: "Sign in", link: "/login" },
    { label: "Sign up", link: "/registration" }
];
    if(user) {
        navItems = [
            { label: "Account", link: "/account" }
        ];
    }
  return (
    <div className="navigation-list">
      <ul>
        {navItems.map(item => {
          return (
            <NavigationListItem
              item={item}
              key={item.label}
              handleClose={handleClose}
              user={user}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default NavigationList;
