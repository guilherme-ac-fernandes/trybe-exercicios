import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoAction } from './actions/action'

const AddTodo = (props) => {
    const { addTodo } = props;
    let input;
    return (
      <form className="InputTodo" onSubmit={(event) => {
        event.preventDefault();
        if (input.value.trim()) {
          addTodo(input.value);
          input.value = '';
          input.focus();
        }
      }}>
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            ref={ (node) => { input = node } }
            type="text"
          />
        </label>
        <button type="submit">
          Adicionar
        </button>
      </form>
    );
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodoAction(todo)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
