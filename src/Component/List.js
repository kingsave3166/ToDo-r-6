import React, { Component } from "react";

class List extends Component {
  render() {
    const bodyList = this.props.items.map((item, index) => {
      return (
        <div className="item" key={(index + 1) * 10}>
          <input type="checkbox" className="checkbox" checked={this.check} />
          <div className="item-text">{item}</div>
          <button
            className="item-del"
            key={index}
            id={index}
            onClick={this.props.deleteItem}
          >
            +
          </button>
        </div>
      );
    });
    return <div className="list">{bodyList}</div>;
  }
}
export default List;
