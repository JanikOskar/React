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
    this.removeTodo = this.removeTodo.bind(this);
    this.onClick = this.onClick.bind(this);
    this.removeActive = this.removeActive.bind(this);
    this.removeDone = this.removeDone.bind(this);
    this.onClickActive = this.onClickActive.bind(this);
    this.changeEditMode = this.changeEditMode.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      term: "",
      items: ["dupa"],
      active: ["coss"],
      done: ["wera"],
      isInEditMode: false
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
  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
  };
  changeState = inputValue => {
    this.setState({
      isInEditMode: false,
      items: inputValue.items
    });
  };

  render() {
    return (
      <div className="triangle">
        <Send onChange={this.onChange} onSubmit={this.onSubmit} />
        <div className="container">
          <Todo
            {...this.state}
            removeTodo={this.removeTodo}
            onClick={this.onClick}
            changeEditMode={this.changeEditMode}
            changeState={this.changeState}
            value={this.props.value}
          />
          <Active
            {...this.state}
            onClickActive={this.onClickActive}
            removeActive={this.removeActive}
          />
          <Done {...this.state} removeDone={this.removeDone} />
        </div>
      </div>
    );
  }
}

export default App;
