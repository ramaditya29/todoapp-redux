import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, visibilityFilter } from './actions';
import { bindActionCreators } from "redux";
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import Footer from './components/footer';
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

  handleVisibleFilter = (value) => {
    console.log(value);
    this.props.visibilityFilter(value);
  }

  render(){
    let { todos, active } = this.props;
    let types = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];
    return (
      <div>
        <div>
          <InputField type="text" placeholder="TODO Item" onChangeHandler={this.onChangeHandler} value={this.state.todoInput}/>
          <button type="button" onClick={this.addTodoItem}>Add</button>
        </div>
        <div>
          <TodoList todoitems={ todos } toggleHandler={this.toggleHandler}/>
        </div>
        <div>
          <Footer active={active} types={types} handleClick={this.handleVisibleFilter}/>
        </div>
      </div>
    );
  }

}

const handleVisibilityFilter = (todos = [] , visibilityFilter) => {
  switch(visibilityFilter){
      case 'SHOW_ALL': return todos;
      case 'SHOW_COMPLETED': return todos.filter(item =>  item.completed);
      case 'SHOW_ACTIVE': return todos.filter(item => !item.completed);
  }
}

const mapStateToProps = state => {
  return {
   todos: handleVisibilityFilter(state.todos, state.visibilityfilter),
   active: state.visibilityfilter
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo,
      toggleTodo,
      visibilityFilter
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
