import React from 'react';
import Todo from './todos/todos';
import TodoContainer from './todos/todos_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    // debugger
    return (
      <div>
        <TodoContainer/>
      </div>
    )
  }
}

export default App;