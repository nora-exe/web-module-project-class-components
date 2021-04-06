import React, {useState} from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './components/Todo.scss';


// initial array of todo items
const tasks = [
  {
    task: 'Type in a new task',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Click \'Add\'',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  //* Event handlers
  // toggle tasks
  toggleTask = (id) => {
    const newTask = this.state.tasks.map(item => {
      if (item.id === id) {
        return({
          ...item,
          completed: !item.completed
        });
      } else {
        return item
      }
    });
    this.setState({
      tasks: newTask
    })
  }

  // submit ('add') a task
  addTask = (taskName) => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: taskName,
        id: Date.now(),
        completed: false
      }]
    });
  }

  // clear checked ('completed') tasks
  clearCompleted = e => {
    this.setState({
      tasks: this.state.tasks.filter(item => (!item.completed))
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>📝 Welcome to your To-Do App! ✔</h1>
          <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
          <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
         </div>
       </div>
    );
  }
}

export default App;
