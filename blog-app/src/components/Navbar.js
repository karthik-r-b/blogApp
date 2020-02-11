import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-info">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink exact to="/" className="navbar-brand">
          BlogApp
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                About-Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Albums"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                Albums
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
