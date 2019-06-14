import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';
import { bindActionCreators } from "redux";
import InputField from './components/InputField';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component{
  state = {
    todoInput : ''
  }

  onChangeHandler = (event) => {
    this.setState({
      todoInput: event.target.value
    })
  }

  addTodoItem = () => {
    let { todoInput } = this.state;
    if(todoInput){
      this.props.addTodo(this.state.todoInput);
      this.setState({
        todoInput: ''
      })
    } else {
      alert('Please enter some text');
    }
  }

  toggleHandler = (currItem) => {
    this.props.toggleTodo(currItem.id);
  }

  render(){
    let { todos } = this.props;
    return (
      <div>
        <div>
          <InputField type="text" placeholder="TODO Item" onChangeHandler={this.onChangeHandler} value={this.state.todoInput}/>
          <button type="button" onClick={this.addTodoItem}>Add</button>
        </div>
        <div>
          <TodoList todoitems={ todos } toggleHandler={this.toggleHandler}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
      toggleTodo
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
