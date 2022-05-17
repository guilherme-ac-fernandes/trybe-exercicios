import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { name, label, onChange, value, maxLength, id, testId } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          name={ name }
          value={ value }
          onChange={ onChange }
          maxLength={ maxLength }
          id={ id }
          data-testid={ testId }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  id: PropTypes.string,
  testId: PropTypes.string,
};

export default TextArea;
