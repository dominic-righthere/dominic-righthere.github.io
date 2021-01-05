import React from "react";
import "./navbar.css";

const SideNavBar = ({ props }) => {
  let Classes = "side-nav-bar";
  if ({}) {
    Classes = "side-nav-bar open";
  }
  return (
    <nav className={Classes}>
      <ul>
        <li onClick={props.setSideBar(true)}>
          <i className="material-icons">close</i>
        </li>
        <li> Dashboard </li>
        <li> Services</li>
      </ul>
    </nav>
  );
};

export default SideNavBar;