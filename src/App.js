import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Layout/Header'
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  //Toggle completed prop of Todo Item
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id ){
          todo.completed = !todo.completed
        }
        return todo;

      })
    });
  }

  //Delete Todo Item
  deleteTodoItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]}));
  }

  //Add Todo item
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data]})
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo
          addTodo={this.addTodo}/>
          <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodoItem={this.deleteTodoItem}/>
        </div>
      </div>
    );
  }
}

export default App;
