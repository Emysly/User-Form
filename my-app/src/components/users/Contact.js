import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from "../../actions/userActions";
// import { updateUser } from "../../actions/userActions";
// import { getUsers } from "../../actions/userActions";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends Component {
  state = {
    showUserInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteUser(id);
  };

  render() {
    const { id, firstname, lastname, birthday, age, hobby } = this.props.user;

    const { showUserInfo } = this.state;

    return (
      <div className="card card-body mb-3 bg-primary">
        <h4>
          User
          {""}{" "}
          <i
            onClick={() =>
              this.setState({ showUserInfo: !this.state.showUserInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-times float-right ml-3 text-danger"
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={"/edit"}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h4>
        {showUserInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{firstname}</li>
            <li className="list-group-item">{lastname}</li>
            <li className="list-group-item">{birthday}</li>
            <li className="list-group-item">{age}</li>
            <li className="list-group-item">{hobby}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteUser }
)(Contact);
