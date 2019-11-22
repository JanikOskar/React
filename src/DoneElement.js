import React from "react";
class DoneElement extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      isInEditMode: false
    };
  }
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };

  render() {
    return (
      <div className="allLists">
        <div className="list">
          {this.state.isInEditMode ? (
            <input
              className="text"
              type="text"
              defaultValue={this.props.item}
              ref={this.input}
            ></input>
          ) : (
            <li
              key={this.props.index}
            >
              {this.props.item}
            </li>
          )}
        </div>
        {this.state.isInEditMode ? (
          <div className="edit">
            <button
              onClick={() => {
                
                this.props.updateComponentValueDone(this.input.current.value, this.props.index);
                this.setState({
                  isInEditMode: false,
                  
                });
              }}
            >
              Accept
            </button>
          </div>
        ) : (
          <div className="edit">
            <button
              onClick={() => {
                this.changeEditMode();
              }}
            >
              Edit
            </button>
          </div>
        )}
        {this.state.isInEditMode ? (
          <div>
            <button
              onClick={() => {
                this.changeEditMode();
              }}
            >
              Back
            </button>
          </div>
        ) : (
          <div className="button">
            <button
              onClick={() => {
                this.props.removeDone(this.props.index);
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default DoneElement;
