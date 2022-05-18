import React from 'react';
import { connect } from 'react-redux';
import { toggleAction } from '../actions/action';

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'done':
      return todos.filter(({completed}) => completed);
    case 'progress':
      return todos.filter(({completed}) => !completed);
    default:
      return todos;
  }
}

const TodoList = (props) => {
  const { listTodo, filter, toggle } = props;
  return (
    <ul>
      {getTodos(listTodo, filter).map((todo) => (
        <li 
          key={ todo.id } 
          onClick={() => toggle(todo.id)} 
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          { todo.text }
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  listTodo: state.reducer.listTodo,
  filter: state.reducer.filter,
})

const mapDispatchToProps = (dispatch) => ({
  toggle: (id) => dispatch(toggleAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);