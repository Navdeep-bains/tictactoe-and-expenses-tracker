import React, { Component } from "react";
import {Link} from 'react-router-dom'
export default class Admin extends Component {
  render() {
    return (
      <div>
        <h3>Only Auth Peoples are allowed to this page <Link to = "/logout">Logout</Link></h3>
      </div>
    );
  }
}
