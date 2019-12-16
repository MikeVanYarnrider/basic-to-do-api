import React from "react";
import "./assets/stylesheets/index.css";
import Task from "./components/Task";
import CreateForm from "./components/CreateForm";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

import { Route, Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <CreateForm />
        <hr />
        <Task />
        <hr />

        <Route
          exact
          path="/login"
          render={props => <Login {...props} setUser={this.setUser} />}
        />
        <Route
          exact
          path="/signup"
          render={props => <Signup {...props} setUser={this.setUser} />}
        />
      </div>
    );
  }
}

export default App;
