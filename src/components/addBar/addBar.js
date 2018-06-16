import React from 'react';
import './addBar.css';

const addBar = (props) => {
    return (
        <div className="InputTodo">
            <button className="transparent-button" onClick={props.checkAll}><i className="down"></i></button>
            <input
                autoFocus="autofocus"
                type="text"
                placeholder="What needs to be done?"
                onKeyPress={props.onAddition}
                onChange={props.updateInput}
                value={props.input} />
        </div>
    );
}

export default addBar;