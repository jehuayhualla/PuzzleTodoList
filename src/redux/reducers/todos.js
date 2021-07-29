import { ADD_TODO, DELETE_TODO, CHANGE_TASK } from "../actionTypes";

const initialState = {
  todo_list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task, completed} = action.payload
      return {
        ...state,
        todo_list: [{ id, task, completed }, ...state.todo_list]
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todo_list: state.todo_list.filter((todo) => todo.id != id)
      };
    }
    case CHANGE_TASK: {
      const { id, status } = action.payload
      return {
        ...state,
        todo_list: state.todo_list.map((todo) => {
          if(todo.id != id) return todo
          todo.completed = status
          return todo
        })
      };
    }
    default:
      return state;
  }
}