import React, { Component } from 'react';
import './App.css';
import AddBar from './components/addBar/addBar';

class App extends Component {

  state = {
    input: '',
    todosList: [
      { todo: 'something', isChecked: false },
      { todo: 'intersting', isChecked: false },
      { todo: 'will happen', isChecked: false },
    ]
  }

  addTodo = (e) => {
    if (e.key === 'Enter') {
      const todo = {
        name: this.state.input,
        isChecked: false
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, todo]
      }));
    }
  }

  updateInput = (e) => {
    this.setState({
      input: e.target.value
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
      </div>
    );
  }
}

export default App;
