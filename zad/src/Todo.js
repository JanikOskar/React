import React from "react";
import List from "./List.js";

class Todo extends React.Component {
  render() {
    return (
      <div className="box1">
        <p>ToDo</p>
        <List items={this.props.items} removeTodo={this.removeTodo} {...this.props}/>
      </div>
    );
  }
}
export default Todo;
