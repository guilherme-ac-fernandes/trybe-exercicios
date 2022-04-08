import React from "react";

class TextArea extends React.Component {
  render() {
    const { name, label, max, handleChange } = this.props;
    return (
      <label>
        { label }
        <textarea 
          onChange={handleChange}
          name={ name } 
          maxLength={ max } 
          cols="20" 
          rows="10"
          required >
        </textarea>
      </label>
    );
  }
}

export default TextArea;