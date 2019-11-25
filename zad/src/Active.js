import React from "react";

class Active extends React.Component {

  render() {
    return (
      <div className="box2">
        <p>Active</p>
        <ul>
        { this.props.active.map((item, index)=> (
            <div className="allLists">
            <div className="list"> <li onClick={(item) => {this.props.onClickActive(index)}} key={index}>{item}</li></div>
             <div className="edit"><button >Edit</button></div>
             <div className="button"><button onClick={() =>{this.props.removeActive(index)} }>XD
             </button></div>
             </div>
        ))}

       
        </ul>
      </div>
    );
  }
}
export default Active;
