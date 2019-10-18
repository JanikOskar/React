import React from 'react';
class List extends React.Component{
removeTodo(id) {
this.props.removeTodo(id);
}
  render() {
  return(
      <ul>
          { this.props.items.map((item, index)=> (
              <li key={index}>{item}
              <button onClick={() =>this.removeTodo(index)}>X
              </button></li>
          ))}
      </ul>
  );
}
}

export default List;