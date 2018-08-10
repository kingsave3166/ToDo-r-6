import React, { Component } from "react";
import Todo from "./Component/Todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Todo />
      </div>
    );
  }
}

export default App;
