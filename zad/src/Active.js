import React from "react";
//import List from './List.js';

class Active extends React.Component {
  onClick(item, index) {
    this.props.onClick(item, index);
  }
  render() {
    return (
      <div className="box2">
        <p>Active</p>
        <ul>
          {this.props.active.map((item, index) => {
            return (
              <li
                onClick={() => {
                  this.onClick(index);
                }}
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Active;
