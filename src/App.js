import React from "react";
import "./App.css";
import Send from "./Send.js";
import Todo from "./Todo.js";
import Active from "./Active";
import Done from "./Done";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: ["dupa", "mleko"],
      active: ["coss"],
      done: ["wera"]
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
  removeTodo = index => {
    let done = this.state.items.filter((item, todoIndex) => {
      return todoIndex === index;
    });
    this.setState({
      done: this.state.done.concat(done)
    });
  };
  onClick = index => {
    let active = this.state.items.filter((item, todoIndex) => {
      return todoIndex === index;
    });
    this.setState({
      active: this.state.active.concat(active)
    });
  };
  removeActive = i => {
    this.setState(state => {
      let active = state.active.filter((item, j) => i !== j);
      return {
        active
      };
    });
  };
  removeDone = i => {
    this.setState(state => {
      let done = state.done.filter((item, j) => i !== j);
      return {
        done
      };
    });
  };
  onClickActive = index => {
    let done = this.state.active.filter((item, todoIndex) => {
      return todoIndex === index;
    });
    this.setState({
      done: this.state.done.concat(done)
    });
  };

  changeState = inputValue => {
    this.setState({
      
      
      items: inputValue.items,
    });
  };
  changeStateActive = inputValue => {
    this.setState({
      
      active: inputValue.active,
     
    });
  };
  changeStateDone = inputValue => {
    this.setState({
      
      done: inputValue.done,
     
    });
  };
  removeTodoo = i => {
    this.setState(state => {
      let items = state.items.filter((item, j) => i !== j);
      return {
        items
      };
    });
  };

  render() {
    return (
      <div className="triangle">
        <Send onChange={this.onChange} onSubmit={this.onSubmit} />
        <div className="container">
          <Todo
            removeTodo={this.removeTodo}
            onClick={this.onClick}
            items={this.state.items}
            changeState={this.changeState}
            removeTodoo={this.removeTodoo}
          />
          <Active
             active={this.state.active}
             changeStateActive={this.changeStateActive}
            onClickActive={this.onClickActive}
            removeActive={this.removeActive}
          />
          <Done done={this.state.done}
             changeStateDone={this.changeStateDone}
            removeDone={this.removeDone} />
        </div>
      </div>
    );
  }
}

export default App;
