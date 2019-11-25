import React from "react";
import ListElement from "./ListElement.js";

class List extends React.Component {
  updateComponentValue = (inputValue) => {
    this.props.changeState({
      isInEditMode: false,
      items: [inputValue],
    });
  };  

  render() {
   
    return (
      <ul>
        {this.props.items.map((item, index,) => (
          <ListElement
            item={item}
            index={index}
            changeEditMode={this.props.changeEditMode}
            removeTodo={this.props.removeTodo}
            updateComponentValue={this.updateComponentValue}
            onClick={this.props.onClick}
            changeState={this.props.changeState}
            isInEditMode={this.props.isInEditMode}
            items={this.props.items}
                      
              
          />
        ))}
      </ul>
    );
  }
}
export default List;
