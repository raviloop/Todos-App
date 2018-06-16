import React from 'react';
import './footer.css';

const footer = (props) => {
    const activeBorder = {
        border: '1px solid #5B5B5B',
        borderRadius: '3px',
        color: '#5B5B5B'
    }
    return (

        <div className="Footer">
            <p>{props.itemsLeft} items left</p>
            <div className="states">
                <button
                    className="transparent-button"
                    style={props.currentState === 'ALL' ? activeBorder : null}
                    onClick={() => props.changeState('ALL')}> All </button>
                <button
                    className="transparent-button"
                    style={props.currentState === 'ACTIVE' ? activeBorder : null}
                    onClick={() => props.changeState('ACTIVE')}>Active </button>
                <button
                    style={props.currentState === 'COMPLETED' ? activeBorder : null}
                    className="transparent-button"
                    onClick={() => props.changeState('COMPLETED')}>Completed </button>
            </div>
            <button className="clearTodo transparent-button" onClick={props.clearCompleted}> Clear completed</button>
        </div>
    )
};

export default footer;