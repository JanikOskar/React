import React from "react";
import ListElement from "./ListElement.js";

class List extends React.Component {
  updateComponentValue = (inputValue,index) => {
    const newItems =[...this.props.items] ;
    newItems[index]=inputValue;
    this.props.changeState({
      items: newItems  });
  };
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <ListElement
          removeTodoo={this.props.removeTodoo}
            item={item}
            index={index}
            removeTodo={this.props.removeTodo}
            updateComponentValue={this.updateComponentValue}
            onClick={this.props.onClick}
            changeState={this.props.changeState}
            items={this.props.items}
          />
        ))}
      </ul>
    );
  }
}
export default List;
