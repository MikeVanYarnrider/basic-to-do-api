import React, { Component } from "react";
import Axios from "axios";

export default class UserForm extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    console.log("handleChange: ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.timeLog(event);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Hello</button>
      </form>
    );
  }
}
