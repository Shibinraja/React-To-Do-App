import React from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends React.Component{
  render(){
      return this.props.todos.map((list) => (
      <Todoitem key = {list.id} todos = {list} markComplete = {this.props.markComplete} deltodo = {this.props.deltodo}/>
    ));
  }
}

Todos.propTypes = {
  todos : PropTypes.array.isRequired
}
export default Todos;



