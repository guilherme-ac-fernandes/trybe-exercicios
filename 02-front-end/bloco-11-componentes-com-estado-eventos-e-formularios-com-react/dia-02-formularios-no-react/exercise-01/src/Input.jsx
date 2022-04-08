import React from "react";

class Input extends React.Component {
  render() {
    const { type, name, label, max } = this.props;
    return (
      <label>
        { label }
        <input 
          type={ type }
          name={ name }
          maxLength={ max } />
      </label>
    );
  }
}

export default Input;
