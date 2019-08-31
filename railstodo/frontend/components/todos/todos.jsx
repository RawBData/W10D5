import React from 'react';
import Todo from './todo';
import TodoForm from './todo_form';

class Todos extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    this.props.fetchAllTodos()
  }
  render(){
    //console.log(this.props.todos)
    let todos = this.props.todos;

    return(
      <div>
        <ul>
        {
          todos.map(todo => {
            return (<li>
              <Todo todo={todo}/>
            </li>)
          })
        }
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo}/>
      </div>
    )
  }
}

export default Todos;