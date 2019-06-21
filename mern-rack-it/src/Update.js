import React, { Component } from "react";
import Form from "./Form";

class Update extends Component {
  render() {
    return (
      <div>
        <h1>Update Page</h1>
        <Form />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Update;
