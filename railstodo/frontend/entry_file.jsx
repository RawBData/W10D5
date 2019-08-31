import React from 'react';
import ReactDOM  from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { receiveTodos, receiveTodo, fetchAllTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';


document.addEventListener("DOMContentLoaded", ()=>{
  let store = configureStore();
  window.store = store;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.fetchAllTodos = fetchAllTodos;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});