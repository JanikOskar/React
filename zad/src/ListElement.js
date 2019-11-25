import React from "react";
class ListElement extends React.Component {
constructor(props){
  super(props);
  this.input= React.createRef(); 

}
   
  render() {
    
    return (
      <div className="allLists">
        <div className="list">
          
          {this.props.isInEditMode ? (
            <input type="text" defaultValue={this.props.items} ref={this.input}></input>
          ) : (
            <li
              onClick={(item) => {
                this.props.onClick(this.props.index);
              }}
              key={this.props.index}
            >
              {this.props.item}
            </li>
          )}
        </div>
        {this.props.isInEditMode ? (
          <div className="edit">
            <button
              onClick={() => {
                this.props.updateComponentValue(this.input.current.value);
              }}
            >
              OK
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              onClick={() => {
                this.props.changeEditMode();
              }}
            >
              EDItto
            </button>
          </div>
        )}
        {this.props.isInEditMode ? (
          <div>
            <button
              onClick={() => {
                this.props.changeEditMode();
              }}
            >
              X
            </button>
          </div>
        ) : (
          <div className="button">
            <button
              onClick={() => {
                this.props.removeTodo(this.props.index);
              }}
            >
              XD
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default ListElement;
