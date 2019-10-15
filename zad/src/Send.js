import React from "react";

class Send extends React.Component {
  render() {
    return (
      <div>
        <form className="inputt" onSubmit={this.props.onSubmit} handleSubmit={this.handleSubmit}>
          <input
            onChange={this.props.onChange}
            value={this.props.items}
            placeholder="what to do"
            name="todo"
            className="inpu"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Send;
