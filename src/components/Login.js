import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      loggedIn:false
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <React-Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </React-Fragment>
    );
  }
}
// const mapStateToProps = (state) => {
//     return state
// }
export default Login;
