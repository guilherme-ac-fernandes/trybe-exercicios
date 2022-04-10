import React, { Component } from "react";

class ProfessionalForm extends Component {
  render() {
    const { changeHandler, count, updateCount, objectValue } = this.props;
    return (
      <fieldset className="container-professional">
        <h3>Dados Profissionais</h3>
        <label>
          Resumo do Currículo: 
          <textarea 
          name="resume"
          maxLength="1000"
          value={ objectValue.resume }
          required
          onChange={changeHandler}
          />
        </label>
        <label>
          Cargo: 
          <input 
            type="text" 
            name="role"
            value={ objectValue.role }
            maxLength="40" 
            required
            onChange={changeHandler}
            onMouseEnter={() => {
              if (count === 0) {
                alert('Preencha com cuidado esta informação.');
                updateCount()
              }
            }}
          />
        </label>
        <label>
          Descrição do Cargo: 
          <textarea 
          name="roleDescription"
          value={ objectValue.roleDescription }
          maxLength="500"
          required
          onChange={changeHandler}
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalForm;
