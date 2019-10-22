import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Table extends Component {
  state = {
    showUserInfo: false
  };

  render() {
    const { firstname, lastname, birthday, age, hobby } = this.props.user;

    const { showUserInfo } = this.state;

    return (
      <div className="card card-body mb-3 bg-primary">
        <h4 className="text-white">
          USER DATA
          {""}{" "}
          <i
            onClick={() =>
              this.setState({ showUserInfo: !this.state.showUserInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {showUserInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              <h3>Firstname: </h3>
              <h4>{firstname}</h4>
            </li>
            <li className="list-group-item">
              <h3>Lastname: </h3>
              <h4>{lastname}</h4>
            </li>
            <li className="list-group-item">
              <h3>Birthday: </h3>
              <h4>{birthday}</h4>
            </li>
            <li className="list-group-item">
              <h3>Age: </h3>
              <h4>{age}</h4>
            </li>
            <li className="list-group-item">
              <h3>Hobby: </h3>
              <h4>{hobby}</h4>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Table;
