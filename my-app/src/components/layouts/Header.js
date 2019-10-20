import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = props => {
  return (
    <nav className="navbar navbar-dark navar-expand-sm bg-primary mb-3 py-0 text-white">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.header}
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link float-left mr-3">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link to={"/add"} className="nav-link float-left mr-3">
              <i className="fas fa-plus"></i> Add
            </Link>
            <Link to={"/about"} className="nav-link float-left mr-3">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  header: PropTypes.string.isRequired
};
export default Header;
