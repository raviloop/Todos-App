import React, { Component } from 'react';
import './App.css';
import AddBar from './components/addBar/addBar';
import TodoList from './containers/TodoList/TodoList';
class App extends Component {

  state = {
    input: '',
    todosList: [
      { id: 1, name: 'something', isChecked: true },
      { id: 2, name: 'intersting', isChecked: false },
      { id: 3, name: 'will happen', isChecked: false },
    ]
  }

  addTodo = (e) => {
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
          onAddition={this.addTodo} />
        <TodoList
          todos={this.state.todosList}
          handleCheck={(todoId) => this.checkboxHandler(todoId)}
        />
      </div>
    );
  }
}

export default App;
