import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/pages/Home";

class App extends Component {
  render() {
    return (
      <div className="ui container-fluid">
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default App;
