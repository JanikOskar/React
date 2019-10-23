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
    this.removeTodo=this.removeTodo.bind(this)
    this.onClick=this.onClick.bind(this);
    this.state = {
      term: "",
      items: ["ss", "dd"],
      active: []
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
  removeTodo = i => {
    this.setState(state => {
      const items = state.items.filter((item,j)=> i !==j);
    return {
      items,
    };
    });
  }
    onClick = index => {
      const active = this.state.items.filter((item, todoIndex) => {
        return todoIndex === index
      })
      this.setState({ 
        active
       })
      };
  

  render() {
    return (
      <div className="triangle">
        <Send
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <div className="container">
          <Todo {...this.state} removeTodo={this.removeTodo} onClick={this.onClick}/>
          <Active {...this.state} onClick={this.onClick}/>
          <Done />
        </div>
      </div>
    );
  }
}

export default App;