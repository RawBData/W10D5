// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   }
// };

//const newTodos =[{id: 3, title: "walk Dog", body:"five miles", done: false},{id: 4, title: "fly bird", body: "around town", done: true}]

import { RECEIVE_TODO_NAME, RECEIVE_TODOS_NAME} from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({},state);
  switch (action.type) {
    case RECEIVE_TODOS_NAME:
        action.todos.forEach( (e)=> {
          nextState[e.id] = e;
        });

        return nextState;

    case RECEIVE_TODO_NAME:
        nextState[action.todo.id] = action.todo;

        return nextState;

    default:
      return state;
  }
};

export default todosReducer;