import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/userActions";

class Contacts extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Users</span> List
        </h1>
        {users.map(user => (
          <Contact key={user.id} user={user} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Contacts);
