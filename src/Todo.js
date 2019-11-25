import React from "react";
import List from "./List.js";

class Todo extends React.Component {
  render() {
    return (
      <div className="box1">
        <p>ToDo</p>
        <List
        removeTodoo={this.props.removeTodoo}
          items={this.props.items}
          removeTodo={this.props.removeTodo}
          onClick={this.props.onClick}
          changeState={this.props.changeState}
        />
      </div>
    );
  }
}
export default Todo;
