import React, { Component } from 'react';
import './App.css';
import AddBar from './components/addBar/addBar';
import TodoList from './containers/TodoList/TodoList';
class App extends Component {

  state = {
    input: '',
    // todosList: [{'id':1,'name':'something','isChecked':false}]
    todosList: []
  }

  addTodoHandler = (e) => {
    if (e.key === 'Enter') {
      const todo = {
        id: this.state.todosList.length + 1,
        name: this.state.input,
        isChecked: false
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, todo],
        input: ''
      }));
    }
  }

  removeTodoHandler = (todoId) => {
    console.log(todoId)
    const todolist = [...this.state.todosList];
    const newtodo = todolist.filter((todo) => todo.id != parseInt(todoId))
    this.setState(prevState => ({
      todosList: [...newtodo]
    }))
    console.log(newtodo)
  }

  updateInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  checkboxHandler = (todoId) => {

    const todolist = [...this.state.todosList];
    todolist.map(todo => todo.id === parseInt(todoId) ? todo.isChecked = !todo.isChecked : null)
    this.setState({
      TodoList: todolist
    })
  }


  render() {
    const headerStyle = {
      color: '#EBD3D4',
      fontSize: '70px'
    }
    return (
      <div className="App">
        <h1 style={headerStyle}> React Todos App </h1>
        <AddBar
          input={this.state.input}
          updateInput={this.updateInput}
          onAddition={this.addTodoHandler} />
        <TodoList
          todos={this.state.todosList}
          handleCheck={(todoId) => this.checkboxHandler(todoId)}
          removeTodo={(todoId) => this.removeTodoHandler(todoId)}
        />
      </div>
    );
  }
}

export default App;
