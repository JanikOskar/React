import React from 'react';
class List extends React.Component{
removeTodo(id) {
this.props.removeTodo(id);

}
onClick(item, index){
    this.props.onClick(item, index);
  }
  render() {
  return(
      <ul>
          { this.props.items.map((item, index)=> (
              <li onClick={(e) => {this.props.onClick(index)}} key={item}>{item}
              <button onClick={() =>this.removeTodo(index)}>X
              </button></li>
          ))}
      </ul>
  );
}
}

export default List;