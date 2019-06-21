import React, { Component } from "react";
import Form from "./Form";

class Create extends Component {
  render() {
    return (
      <div>
        <h1>Create Exercise</h1>
        <Form />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Create;
