import React from "react";
import DoneElement from "./DoneElement.js";

class Done extends React.Component {
  updateComponentValueDone = (inputValue,index) => {
    const newItems =[...this.props.done] ;
    newItems[index]=inputValue;
    this.props.changeStateDone({
      done: newItems  });
  };
  render() {
    return (
      <div className="box3">
        <p>Done</p>
        <ul>
        {this.props.done.map((item, index) => (
          <DoneElement
            item={item}
            index={index}
            removeDone={this.props.removeDone}
            onClickDone={this.props.onClickDone}
            updateComponentValueDone={this.updateComponentValueDone}
            changeStateDone={this.props.changeStateDone}
            done={this.props.done}
          />
        ))}

       
        </ul>
      </div>
    );
  }
}
export default Done;
