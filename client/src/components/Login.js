import React, { Component } from "react";
import UserForm from "./UserForm";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Log In </h2>
        <UserForm setUser={this.setUser} />
      </div>
    );
  }
}
