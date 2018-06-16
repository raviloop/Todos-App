import React from 'react';
import './todo.css';
import 'pretty-checkbox';
const todo = (props) => {

    const checkedStyle = {
        color: '#D8D8D8',
        textDecoration : 'line-through'
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
        </div>

    )
};

export default todo;