import React from "react";

class Input extends React.Component {
  render() {
    const { type, name, label, max, handleChange } = this.props;
    return (
      <label>
        { label }
        <input
          onChange={handleChange}
          type={ type }
          name={ name }
          maxLength={ max }
          required />
      </label>
    );
  }
}

export default Input;
