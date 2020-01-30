import React from 'react';
import Todos from './Todos';
import Header from './Header';
import Addtodo from './Addtodo';
import uuid from "uuid";
import './App.css';



class App extends React.Component{
  state = {
    todos:[
      {
        id:uuid.v4(),
        title:'Make Breakfast for all of you',
        completed: false
      },
      {
        id:uuid.v4(),
        title:'Leave out of the Group',
        completed: false
      },
      {
        id:uuid.v4(),
        title:'Bought dress for Christmas',
        completed: false
      }
    ]
  }



  toggleComplete = (id) => {
    this.setState({todos : this.state.todos.map((todo)=>{
    
      if(todo.id === id){
          todo.completed = !todo.completed;
      }
      return todo;

    }) });

}

deleteTodo = (id) => {
this.setState({todos : [...this.state.todos.filter((todo) => {return todo.id !== id})] })


}

addTodo = (title) => {
  const  newTodo = {
    title : title,
    id : uuid.v4(),
    completed : false
  }
  this.setState({todos: [...this.state.todos, newTodo]})
}

  render(){
    return(
      <div className="App">
        <div className="container">

        <Header/>
        <Addtodo addtodo = {this.addTodo}/>
      <Todos todos={this.state.todos} markComplete = {this.toggleComplete} deltodo = {this.deleteTodo}/>

        </div>
        
      </div>
    )
  }
}

export default App;
