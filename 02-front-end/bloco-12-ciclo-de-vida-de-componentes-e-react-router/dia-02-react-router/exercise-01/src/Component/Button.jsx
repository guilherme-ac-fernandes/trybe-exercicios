import React from "react";

class Button extends React.Component {
  render() {
    const {name, onClick, disabled} = this.props;
    return (
      <button name={name} onClick={onClick} disabled={disabled}>
        {name}
      </button>
    )
  }
}

export default Button;
