import React, { Component } from 'react';
import './App.css';
import AddBar from './components/addBar/addBar';
import TodoList from './containers/TodoList/TodoList';
import Footer from './components/footer/footer';

class App extends Component {

  state = {
    input: '',
    // todosList: [{'id':1,'name':'something','isChecked':false}]
    todosList: [],
    currState: 'ALL'
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

  changeStateHandler = (todoState) => {
    this.setState({ currState: todoState });
  }

  clearCompletedHandler = () => {
    let todos = [...this.state.todosList];
    todos = todos.filter((todo) => !todo.isChecked);
    this.setState({
      todosList: todos
    })
  }

  checkAllHandler = () => {
    let todos = [...this.state.todosList];
    let falseCheck = null;
    falseCheck = todos.find((todo) => todo.isChecked === false);
    falseCheck ? todos.forEach(todo => {
      todo.isChecked = true
    })
      : todos.forEach(todo => {
        todo.isChecked = false
      })

    this.setState({
      todosList: todos
    })
  }

  render() {
    const headerStyle = {
      color: '#EBD3D4',
      fontSize: '70px'
    }

    const itemsLeftCount = this.state.todosList.filter((todo) => !todo.isChecked).length;
    return (
      <div className="App">
        <h1 style={headerStyle}> React Todos App </h1>
        <AddBar
          checkAll={this.checkAllHandler}
          input={this.state.input}
          updateInput={this.updateInput}
          onAddition={this.addTodoHandler} />
        <TodoList
          currentState={this.state.currState}
          todos={this.state.todosList}
          handleCheck={(todoId) => this.checkboxHandler(todoId)}
          removeTodo={(todoId) => this.removeTodoHandler(todoId)}
        />
        {this.state.todosList.length !== 0?
        <Footer
        currentState={this.state.currState}
        itemsLeft={itemsLeftCount}
        changeState={(todoState) => this.changeStateHandler(todoState)}
        clearCompleted={this.clearCompletedHandler}
        /> 
        : null
      }
      </div>
    );
  }
}

export default App;
