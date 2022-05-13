export const ADD_TODO = 'ADD_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';
export const TOGGLE_TODOS = 'TOGGLE_TODOS';

export const addTodoAction = (payload) => ({ type: ADD_TODO, payload});

export const filterAction = (filter) => ({ type: FILTER_TODOS, filter});

export const toggleAction = (id) => ({ type: TOGGLE_TODOS, id});
