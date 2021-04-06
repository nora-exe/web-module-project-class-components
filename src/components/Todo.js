import React from 'react';

const Todo = props => {
    const handleClick = ()=>{
        props.toggleTask(props.task.id);
      }
    return (
        <div
            onClick={handleClick}
            className={`item${props.task.completed ? ' completed' : ''}`}
        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;