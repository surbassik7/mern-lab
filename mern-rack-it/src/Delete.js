import React, { Component } from "react";
import Form from "./Form";

class Delete extends Component {
  render() {
    return (
      <div>
        <h1>Delete Page</h1>
        <Form />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Delete;
