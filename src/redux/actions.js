import { ADD_TODO, DELETE_TODO, CHANGE_TASK } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = task => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task,
    completed: false,
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id
  }
});

export const changeTask = (id, status) => ({
  type: CHANGE_TASK,
  payload: {
    id,
    status
  }
});


