import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { Form, DatePicker, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";

import "antd/dist/antd.css";
import "../../AddUser.css";

class NormalLoginForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    birthday: "",
    age: "",
    hobby: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.birthday = values.birthday.toString().slice(4, 15);
        const { firstname, lastname, birthday, age, hobby } = values;
        const newUser = {
          id: uuid(),
          firstname,
          lastname,
          birthday,
          age,
          hobby
        };

        this.props.addUser(newUser);

        const allUsers = JSON.parse(localStorage.getItem("newUser")) || [];

        allUsers.push(newUser);

        localStorage.setItem("newUser", JSON.stringify(allUsers));

        this.props.form.resetFields();

        this.props.history.push("/");
      } else {
        values.birthday = values.birthday.toString().slice(4, 15);
        const { firstname, lastname, birthday, age, hobby } = values;
        const newUser = {
          id: uuid(),
          firstname,
          lastname,
          birthday,
          age,
          hobby
        };

        this.props.addUser(newUser);

        const allUsers = JSON.parse(localStorage.getItem("newUser")) || [];

        allUsers.push(newUser);

        localStorage.setItem("newUser", JSON.stringify(allUsers));

        this.props.form.resetFields();
      }
    });
  };

  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="First Name" hasFeedback>
          {getFieldDecorator("firstname", {
            rules: [{ required: true, message: "Please input your firstname!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Firstname"
            />
          )}
        </Form.Item>
        <Form.Item label="Last Name" hasFeedback>
          {getFieldDecorator("lastname", {
            rules: [{ required: true, message: "Please input your lastname!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Lastname"
            />
          )}
        </Form.Item>
        <Form.Item label="Date Of Birth" hasFeedback>
          {getFieldDecorator("birthday", {
            rules: [{ required: true, message: "Please input your birthday!" }]
          })(<DatePicker format="DD-MM-YYYY" />)}
        </Form.Item>
        <Form.Item label="Age" hasFeedback>
          {getFieldDecorator("age", {
            rules: [{ required: true, message: "Please input your age!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Age"
            />
          )}
        </Form.Item>
        <Form.Item label="Hobby" hasFeedback>
          {getFieldDecorator("hobby", {
            rules: [{ required: true, message: "Please input your hobby!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Hobby"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Add User
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

NormalLoginForm.propTypes = {
  addUser: PropTypes.func.isRequired
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default connect(
  null,
  { addUser }
)(WrappedNormalLoginForm);
