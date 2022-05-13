import { ADD_TODO, FILTER_TODOS, TOGGLE_TODOS } from "../actions/action";

const INICIAL_STATE = {
  listTodo: [],
  filter: 'all',
  id: 0,
}

const reducer = (state = INICIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { 
        ...state,
        listTodo: [
            ...state.listTodo, 
          { text: action.payload, completed: false, id: state.id },
        ],
        id: state.id + 1,
      };
    case FILTER_TODOS:
      return { ...state, filter: action.filter };

    case TOGGLE_TODOS:
      return { 
        ...state, 
        listTodo: state.listTodo.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        }) };

    default:
      return state;
  }
}

export default reducer;