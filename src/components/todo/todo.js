import React from 'react';
import './todo.css';
import 'pretty-checkbox';
const todo = (props) => {

    const checkedStyle = {
        color: '#D8D8D8',
        textDecoration: 'line-through'
    }
    const crossStyle = {
        fontSize: '30px',
        color: '#B25257'
    }

    return (

        <div className="Todo">
            <div className="List pretty p-default p-round">
                <input type="checkbox" id={props.id} checked={props.isChecked} onChange={props.handleCheck} />
                <div className="state p-success-o">
                    <label
                        htmlFor={props.id}
                        style={props.isChecked ? checkedStyle : null}>
                        {props.name}
                    </label>
                </div>
            </div>
            <button
                id="btn-remove"
                className="transparent-button"
                onClick={props.removeTodo}
                style={{ float: 'right', display: 'none' }}>
                <i className="fa fa-close" todoid={props.id} style={crossStyle}></i>
            </button>
        </div>

    )
};

export default todo;