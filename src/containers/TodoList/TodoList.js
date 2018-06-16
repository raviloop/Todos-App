import React from 'react';
import Todo from '../../components/todo/todo';

class TodoList extends React.Component {

handleCheck = (e) =>{
    console.log(e.target)
    this.props.handleCheck(e.target.id)
}

    render() {
        let todos = this.props.todos;
        console.log(todos)
        return (
            todos.map(todo => <Todo
                key={todo.name + Math.random().toString()}
                name={todo.name}
                id={todo.id}
                handleCheck={this.handleCheck}
                isChecked={todo.isChecked} />
            )
        );
    }
}

export default TodoList;