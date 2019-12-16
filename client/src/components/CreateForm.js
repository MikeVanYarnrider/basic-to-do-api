import React, { Component } from "react";
import axios from "axios";

class CreateForm extends Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = () => {
    axios
      .post("/tasks/create", {
        title: this.state.title,
        description: this.state.description
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={this.handleChange} />
          <button type="submit" onClick={this.handleClick}>
            Create a new Task
          </button>
        </form>
      </div>
    );
  }
}

export default CreateForm;
