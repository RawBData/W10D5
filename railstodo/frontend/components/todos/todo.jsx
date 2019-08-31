import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.todos)
    let todos = this.props.todos;

    return (
      <div>
        <ul>
          <li>{this.props.todo.title}</li>
          <li>{this.props.todo.body}</li>
          <li>{this.props.todo.id}</li>
        </ul>
      </div>
    )
  }
}

export default Todo;