import React, { Component } from "react";
import { Form, DatePicker, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./AddUser.css";

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
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        values.birthday = values.birthday.toString().slice(4, 15);
        const newUser = {
          firstname: values.firstname,
          lastname: values.lastname,
          birthday: values.birthday,
          age: values.age,
          hobby: values.hobby
        };

        const allUsers = JSON.parse(localStorage.getItem("newUser")) || [];

        allUsers.push(newUser);

        localStorage.setItem("newUser", JSON.stringify(allUsers));

        this.props.form.resetFields();

        await this.setState({
          firstname: "",
          lastname: "",
          birthday: "",
          age: "",
          hobby: ""
        });
      }
    });
    this.props.history.push("/");
  };

  render() {
    function onChange(date, dateString) {
      console.log(date, dateString);
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="First Name">
          {getFieldDecorator("firstname", {
            rules: [{ required: true, message: "Please input your firstname!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Firstname"
            />
          )}
        </Form.Item>
        <Form.Item label="Last Name">
          {getFieldDecorator("lastname", {
            rules: [{ required: true, message: "Please input your lastname!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Lastname"
            />
          )}
        </Form.Item>
        <Form.Item label="Date Of Birth">
          {getFieldDecorator("birthday", {
            rules: [{ required: true, message: "Please input your birthday!" }]
          })(<DatePicker format="DD-MM-YYYY" />)}
        </Form.Item>
        <Form.Item label="Age">
          {getFieldDecorator("age", {
            rules: [{ required: true, message: "Please input your age!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Age"
            />
          )}
        </Form.Item>
        <Form.Item label="Hobby">
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

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
