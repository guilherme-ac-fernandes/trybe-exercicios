import React from 'react';
import { connect } from 'react-redux';
import { filterAction } from '../actions/action';

const FilterTodos = (props) => {
  const { filter } = props;
  return (
    <div>
      <button type='button' onClick={() => filter('all')}>
        Todos
      </button>
      <button type='button' onClick={() => filter('done')}>
        Finalizados
      </button>
      <button type='button' onClick={() => filter('progress')}>
        Em Andamento
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  filter: (filter) => dispatch(filterAction(filter)),
});

export default connect(null, mapDispatchToProps)(FilterTodos);
