import React from "react";
class Done extends React.Component {
  render() {
    return (
      <div className="box3">
        <p>Done</p>
        <ul >
          { this.props.done.map((item, index)=> (
             <div className="allLists">
             <div className="list"> <li key={index}>{item}</li></div>
              <div className="edit"><button >Edit</button></div>
              <div className="button"><button onClick={() =>{this.props.removeDone(index)} }>XD
              </button></div>
              </div>
           )) }
      </ul>
      </div>
    );
  }
}
export default Done;
