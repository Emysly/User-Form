import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "./context";
import axios from "axios";
import uuid from "uuid";

import TextInputGroup from "../layouts/TextInputGroup";

class Addcontact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      birthday: "",
      age: "",
      hobby: "",
      errors: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, birthday, age, hobby } = this.state;

    if (firstname === "") {
      return this.setState({ errors: { firstname: "firstname is required" } });
    } else if (lastname === "") {
      return this.setState({ errors: { lastname: "lastname is required" } });
    } else if (birthday === "") {
      return this.setState({ birthday: { birthday: "birthday is required" } });
    } else if (age === "") {
      return this.setState({ age: { age: "age is required" } });
    } else if (hobby === "") {
      return this.setState({ hobby: { hobby: "hobby is required" } });
    } else {
      const newUser = {
        id: uuid(),
        firstname,
        lastname,
        birthday,
        age,
        hobby
      };

      const result = [];

      result.push(newUser);
      console.log(result);

      this.setState({
        firstname: "",
        lastname: "",
        birthday: "",
        age: "",
        hobby: ""
      });

      console.log(newUser);
      localStorage.setItem("newUser", newUser);

      this.props.history.push("/");
    }
  };
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { firstname, lastname, birthday, age, hobby, errors } = this.state;
    return (
      <form className="form-group mb-5 card">
        <div className="card-header">Add Users</div>
        <div className="card-body">
          <TextInputGroup
            label="FirstName"
            name="firstname"
            placeholder="Firstname..."
            defaultValue={firstname}
            onChange={this.onChange}
            errors={errors.firstname}
          />
          <TextInputGroup
            label="LastName"
            name="lastname"
            placeholder="Lastname..."
            defaultValue={lastname}
            onChange={this.onChange}
            errors={errors.lastname}
          />
          <TextInputGroup
            label="Date Of Birth"
            type="date"
            name="birthday"
            placeholder="Enter Your Date Of Birth..."
            defaultValue={birthday}
            onChange={this.onChange}
            errors={errors.dob}
          />
          <TextInputGroup
            label="Age"
            name="age"
            placeholder="Enter Your Age..."
            defaultValue={age}
            onChange={this.onChange}
            errors={errors.age}
          />
          <TextInputGroup
            label="Hobby"
            name="hobby"
            placeholder="What's Your Hobby..."
            defaultValue={hobby}
            onChange={this.onChange}
            errors={errors.hobby}
          />
          <input
            type="submit"
            value="Add User"
            className="btn btn-block btn-primary mt-2"
            onClick={this.onSubmit}
          />
        </div>
      </form>
    );
  }
}

Addcontact.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  birthday: PropTypes.string,
  age: PropTypes.number,
  hobby: PropTypes.string
};

export default Addcontact;
