import React, { Component } from "react";
import List from "./List";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      attention: false
    };
  }
  render() {
    let worn =
      this.state.attention === true
        ? { boxShadow: "inset 0 0 10px 1px #e86666" }
        : { boxShadow: "inset 0 0 10px 1px #fff" };
    let textInp = this.state.attention === true ? "yyoooddoo" : "ghh";
    return (
      <div className="contain">
        <h1 className="name">ToDo-r-6 List</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="input-text"
            placeholder={textInp}
            type="text"
            style={worn}
            value={this.state.term}
            onChange={this.onChange}
          />
          <button className="input-btn" type="submit">
            +
          </button>
        </form>

        <List items={this.state.items} deleteItem={this.deleteItem} />
        <button className="delete" onClick={this.deleteAll}>
          clean
        </button>
      </div>
    );
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.term === "") {
      this.setState({
        attention: true
      });
    } else {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term],
        attention: false
      });
    }
  };
  deleteItem = e => {
    let arr = this.state.items;
    arr.splice(e.target.id, 1);
    this.setState({
      items: arr
    });
  };
  deleteAll = () => {
    this.setState({
      items: []
    });
  };
}

export default Todo;
