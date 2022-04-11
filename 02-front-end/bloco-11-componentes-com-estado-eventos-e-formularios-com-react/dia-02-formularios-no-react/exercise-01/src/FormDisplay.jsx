import React, { Component } from "react";

class FormDisplay extends Component {
  render() {
    const { name, email, cpf, address, city, countryState,
      addressType, resume, role, roleDescription } = this.props.currentState;
    return (
      <section className="section-display">
      <h2 className="display-title">Dados enviados</h2>
      <div className="container-display">
        <div className="container-pessoal-display">
          <h3>Pessoal</h3>
          <div> Name: { name }</div>
          <div> Email: { email }</div>
          <div> CPF: { cpf }</div>
          <div> Endereço: { address }</div>
          <div> Cidade: { city }</div>
          <div> Estado: { countryState }</div>
          <div> Tipo de residência: { addressType }</div>
        </div>
        <div className="container-professional-display">
          <h3>Profissional</h3>
          <div> Currículo: { resume }</div>
          <div> Cargo: { role }</div>
          <div> Descrição do cargo: { roleDescription }</div>
        </div>
      </div>
      </section>
      
    );
  }
}

export default FormDisplay;
