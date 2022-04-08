import React from "react";

// Resolução proveniente da resolução da Michele Gusmão realizada durante a monitoria com o Especialista Gabriel Espindola e Intrutor Ander
class Button extends React.Component {
  render() {
    // A partir da props passada, retorna o nome para aparecer no botão e para filtrar, onClick que recebe a função do botão e disabled informa se o botão será ou não desabilitado (mediante informação booleana)
    const {name, onClick, disabled} = this.props;
    return (
      <button name={name} onClick={onClick} disabled={disabled}>
        {name}
      </button>
    )
  }
}

export default Button;
