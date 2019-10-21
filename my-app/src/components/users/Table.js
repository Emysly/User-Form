import React, { Component } from "react";

export default class Table extends Component {
  componentDidMount() {
    this.displayUsers();
  }

  displayUsers = () => {
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
