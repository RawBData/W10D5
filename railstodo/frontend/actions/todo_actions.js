import * as UTIL from '../util/todo_api_util';
import * as Errors from '../actions/error_actions';



export const RECEIVE_TODO_NAME = "RECEIVE_TODO";


export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO_NAME,
    todo
  };
};

export const RECEIVE_TODOS_NAME = "RECEIVE_TODOS"

export const receiveTodos = (todos = []) => {
  return {
    type: RECEIVE_TODOS_NAME,
    todos
  };
};

export const fetchAllTodos = () => (dispatch) => {
  return UTIL.fetchTodos()
    .then( todos => {
      dispatch(receiveTodos(todos));
    });
};

export const createTodo = (todo) => (dispatch) => {
  return UTIL.createTodo(todo)
    .then( newTodo => {
      dispatch(receiveTodo(newTodo));
    }, 
      err => dispatch(Errors.receiveErrors(err.responseJSON))
    );
};




