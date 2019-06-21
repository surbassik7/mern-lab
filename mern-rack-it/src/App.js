import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";
import Exercises from "./Exercises";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   exercises: null
    // };
    // this.setExercises = this.setExercises.bind(this);
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img src="./img/Warrior-Logo.png" alt="Home" />
          </Link>
          <input id="search" type="text" placeholder="search" />
          <button type="button" id="single">
            Search
          </button>

          <Link to="/Create">Create</Link>
          <Link to="/Update">Update</Link>
          <Link to="/Delete">Delete</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Create" exact component={Create} />
            <Route path="/Delete" exact component={Delete} />
            <Route path="/Update" exact component={Update} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
