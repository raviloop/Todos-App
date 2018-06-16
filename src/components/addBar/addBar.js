import React from 'react';
import './addBar.css';

const addBar = (props) => {
    return (
        <div className="InputTodo">
            <input 
            type="text" 
            placeholder="What needs to be done?"
            onKeyPress={props.onAddition} 
            onChange={props.updateInput} 
            value={props.input}/>
        </div>
    );
}

export default addBar;