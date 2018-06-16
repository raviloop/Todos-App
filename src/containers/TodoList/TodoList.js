import React from 'react';
import Todo from '../../components/todo/todo';

class TodoList extends React.Component {

    handleCheck = (e) => {
        this.props.handleCheck(e.target.id)
    }

    removeTodo = (e) => {
        console.log(e.target)
        this.props.removeTodo(e.target.getAttribute('todoid'))
    }

    render() {
        let todos = this.props.todos;
        return (
            todos.map(todo => <Todo
                key={todo.name + Math.random().toString()}
                name={todo.name}
                id={todo.id}
                handleCheck={this.handleCheck}
                isChecked={todo.isChecked}
                removeTodo={this.removeTodo} />
            )
        );
    }
}

export default TodoList;