import React from "react";
class List extends React.Component {
  removeTodo(id) {
    this.props.removeTodo(id);
  }
  onClick(item, index) {
    this.props.onClick(item, index);
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <div>
            <li
              onClick={item => {
                this.onClick(index);
              }}
              key={index}
            >
              {item}
              </li>
            <button
              onClick={() => {
                this.removeTodo(index);
              }}
            >
              XD
            </button>
          </div>
        ))}
      </ul>
    );
  }
}

export default List;
