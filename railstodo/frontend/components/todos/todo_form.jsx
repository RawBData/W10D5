import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      body:'',
      id: this.uniqueId()
    };

    this.uniqueId = this.uniqueId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);

  }

  uniqueId() {
    return new Date().getTime();
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value
    });
  }

  handleBodyChange(e){
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let answer = this.props.createTodo(this.state);
    console.log(answer);
    this.setState({
      title: '',
      body: '',
      id: this.uniqueId()
    })
  }

  render() {
    //console.log(this.props.todos)
    console.log(this.state)

    let errorData;
    let errors = 0;
    if (errors){
      let errorData = errors;
    }else{
      errorData = "";
    }

    return (
      <div>
        <h1>New Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
          </label>
          <label>Body
            <input type="text" value={this.state.body} onChange={this.handleBodyChange}/>
          </label>
          <input type="submit" value="submit todo"/>
        </form>
        <div>

        </div>
      </div>
    )
  }
}

export default TodoForm;