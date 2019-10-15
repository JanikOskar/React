import React, { Component } from "react";

class Items extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }

  render(){
    var todoList = this.props.list;
    var listItems = todoList.map(this.createTasks);



    return (
    <ul className="theList">{listItems}</ul>
    );  
}
}

export default Items;