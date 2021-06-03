import React, { Component } from "react";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  //   ---------------------*

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  //   ---------------------*
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default LoginForm;
