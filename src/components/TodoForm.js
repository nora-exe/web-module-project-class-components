import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          input:"",
          placeholder: "what do you need to do today? 🤗",
          canSubmit: false
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value,
            canSubmit: (e.target.value !== "") ? true : false
        })
    }

    // class property to submit form
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.input);
        this.setState({input: '', canSubmit: false, placeholder: 'add another task?'})
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="item"
                        placeholder={this.state.placeholder}
                        value={this.state.input}
                    />
                    <button
                        type="submit"
                        id="submit"
                        disabled={!this.state.canSubmit}
                    >
                        +
                    </button>
                </form>
                <footer>
                    <button
                        onClick={this.props.clearCompleted} type="reset"
                        id="clear"
                    >
                        Clear Completed
                    </button>
                </footer>                
            </>
        );
    }
};

export default TodoForm;