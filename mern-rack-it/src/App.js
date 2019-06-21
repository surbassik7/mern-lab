import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Exercises from "./Exercises";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: null
    };
    // this.setExercises = this.setExercises.bind(this);
  }

  render() {
    return (
      <div>
        <nav>
          <input
            class="form-control"
            id="search"
            type="text"
            placeholder="search"
          />
          <button type="button" id="single" class="btn btn-primary">
            Search
          </button>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
