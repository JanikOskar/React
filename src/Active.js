import React from "react";
import ListActive from "./ListActive.js";

class Active extends React.Component {
  updateComponentValueActive = (inputValue,index) => {
    const newItems =[...this.props.active] ;
    newItems[index]=inputValue;
    this.props.changeStateActive({
      active: newItems  });
  };
  render() {
    return (
      <div className="box2">
        <p>Active</p>
        <ul>
        {this.props.active.map((item, index) => (
          <ListActive
            item={item}
            index={index}
            removeActive={this.props.removeActive}
            onClickActive={this.props.onClickActive}
            updateComponentValueActive={this.updateComponentValueActive}
            changeStateActive={this.props.changeStateActive}
            active={this.props.active}
          />
        ))}

       
        </ul>
      </div>
    );
  }
}
export default Active;
