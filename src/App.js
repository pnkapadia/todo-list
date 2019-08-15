import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodos from './components/AddTodos';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

/*
Author: Prachi Kapadia
Date: August 14, 2019
*/

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Prep Lunch',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Work out',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting @ 2pm',
        completed: false
      }

    ]
  }

  // strikes thru if task is completed or not
  markCompleted = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // deletes a task
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  // adds a task
  addTodos = (title) => {
    const newTask = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTask] })
  }

  render() {
    return (
      <Router> 
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodos addTodos={this.addTodos} />
                <Todos todos={this.state.todos} markCompleted={this.markCompleted}
                deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
      </div>
      </Router>
  );
  }
}
  
export default App;
