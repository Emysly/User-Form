import React, { Component } from "react";
import Table from "./Table";
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
        {users.map(user => (
          <Table key={user.id} user={user} />
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
