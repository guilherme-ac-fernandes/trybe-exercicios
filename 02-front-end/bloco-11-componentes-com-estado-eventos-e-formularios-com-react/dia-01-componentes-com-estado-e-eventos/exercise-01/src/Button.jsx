import React from "react";

// Resolução proveniente da resolução da Michele Gusmão realizada durante a monitoria com o Especialista Gabriel Espindola e Intrutor Ander
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
