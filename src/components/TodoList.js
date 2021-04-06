import React from 'react';

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(item => (
                <Todo
                    toggleTask={props.toggleTask}
                    key={item.id}
                    task={item}
                />
            ))}
        </div>
    );
};

export default TodoList;