import React, { Component } from "react";
import arrayEstados from './arrayEstados';

class PersonalForm extends Component {
  render() {
    const { changeHandler, onBlurHandler, currentState, objectValue } = this.props;
    return (
      <fieldset className="container-personal">
        <h3>Dados Pessoais</h3>
        <label>
          Nome:
          <input 
            type="text"
            value={ objectValue.name }
            name="name" 
            maxLength="40" 
            required
            className="input"
            onChange={changeHandler}
          />
        </label>
        <label>
          Email:
          <input 
            type="email"
            value={ objectValue.email }
            name="email" 
            maxLength="50" 
            required
            className="input"
            onChange={changeHandler}
          />
        </label>
        <label>
          CPF:
          <input 
            type="text"
            value={ objectValue.cpf }
            name="cpf" 
            maxLength="11" 
            required
            className="input"
            onChange={changeHandler}
          />
        </label>
        <label>
          Endereço:
          <input 
            type="text"
            value={ objectValue.address }
            name="address" 
            maxLength="200" 
            required
            className="input"
            onChange={changeHandler}
          />
        </label>
        <label>
          Cidade:
          <input 
            type="text"
            name="city" 
            maxLength="28" 
            required
            className="input"
            value={currentState.city}
            onBlur={onBlurHandler}
            onChange={changeHandler}
          />
        </label>
        <label>
          Estado:
          <select 
            name="countryState" 
            required
            defaultValue="Selecione"
            className="select"
            onChange={changeHandler} 
          >
            <option>Selecione</option>
            {arrayEstados.map(({ uf, nome}) => (
              (<option key={uf}>{`${uf} - ${nome}`}</option>)
            ))}
          </select>
        </label>
        <div className="container-radio">
          <p>Tipo:</p>
          <label htmlFor="house">
            <input
              type="radio"
              name="addressType"
              value="house"
              id="house"
              onChange={changeHandler}
            />Casa
          </label>

          <label htmlFor="apto">
            <input
              type="radio"
              name="addressType"
              value="apartment"
              id="apto"
              onChange={changeHandler}
            />Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PersonalForm;
