import React from "react";
import "./App.css";
import Send from "./Send.js";
import Todo from "./Todo.js";
import Active from "./Active";
import Done from "./Done";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      term: " ",
      items: ["ss", "dd"]
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  };
  handleSubmit(e){
    e.preventDefault();
    e.target.reset();
}
  render() {
    return (
      <div className="triangle">
        <Send
          onChange={this.onChange}
          onSubmit={this.onSubmit}
         handleSubmit={this.handleSubmit}
        />
        <div className="container">
          <Todo {...this.state} />
          <Active />
          <Done />
        </div>
      </div>
    );
  }
}

export default App;
