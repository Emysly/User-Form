import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import PropTypes from "prop-types";

class Table extends Component {
  componentDidMount() {
    this.displayUsers();
    this.props.getUsers();
  }

  displayUsers = () => {
    const { user } = this.props.user;

    console.log(user);
    const users = JSON.parse(localStorage.getItem("newUser"));
    let output = "";
    if (!users) {
      output = `<tr><td>No User <span class="text-danger">Found</span></td>`;
    } else {
      for (let i = 0; i < users.length; i++) {
        output += `<tr><td>${users[i]["firstname"]}</td>
            <td>${users[i]["lastname"]}</td>
            <td>${users[i]["birthday"]}</td>
            <td>${users[i]["age"]}</td>
            <td>${users[i]["hobby"]}</td>
            <tr>`;
      }
    }
    const div = document.querySelector(".collections");
    div.innerHTML = output;
  };

  render() {
    return (
      <div>
        <div className="card-body table-responsive p-0">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Hobby</th>
              </tr>
            </thead>
            <tbody className="collections"></tbody>
          </table>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { addUser }
)(Table);
