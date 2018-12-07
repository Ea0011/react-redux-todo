import React, { Component } from 'react';
import './App.css';
import { TodoList } from './containers/TodoList'
import { AddTodo } from './containers/AddTodo'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TodoList />
        <AddTodo />
      </React.Fragment>
    );
  }
}

export default App;
