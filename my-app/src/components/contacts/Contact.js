import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Consumer } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends Component {
  state = {
    clicked: false
  };

  showContact = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const {
            id,
            firstname,
            lastname,
            birthday,
            age,
            hobby
          } = this.props.contact;
          return (
            <div className="card card-body mb-3 bg-primary">
              <h3>
                {firstname}
                {lastname}
                {""}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down"
                  onClick={this.showContact}
                ></i>{" "}
              </h3>
              {this.state.clicked ? (
                <ul className="list-group card">
                  <li className="list-group-item">{birthday}</li>
                  <li className="list-group-item">{age}</li>
                  <li className="list-group-item">{hobby}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
