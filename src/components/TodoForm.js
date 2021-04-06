import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          input:""
        }
    }

    handleChanges = e => {
        this.setState({
          input: e.target.value
        })
    }

    // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        
        this.setState({input: ''})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type="text" name="item" />
                    <button type="submit">Add Task</button>
                    <button onClick={this.props.clearCompleted} type="reset">Clear Completed</button>
                </form>                
            </>
        );
    }
};

export default TodoForm;