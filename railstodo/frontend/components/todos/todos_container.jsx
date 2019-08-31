import React from 'react';
import { connect } from 'react-redux';
import Todos from './todos';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, fetchAllTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({ 
  receiveTodo: (todo) => dispatch(receiveTodo(todo)), 
  fetchAllTodos: () => dispatch(fetchAllTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);