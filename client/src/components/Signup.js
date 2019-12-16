import React, { Component } from "react";
import UserForm from "./UserForm";

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Sign Up! </h2>
        <UserForm setUser={this.setUser} />
      </div>
    );
  }
}
