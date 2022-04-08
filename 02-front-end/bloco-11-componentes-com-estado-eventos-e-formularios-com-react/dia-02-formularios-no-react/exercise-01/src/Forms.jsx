import React from "react";
import Input from "./Input";
import arrayEstados from './arrayEstados';

class Forms extends React.Component {
  render() {
    return (
      <forms className='forms-container'>
        <fieldset>

          <Input label='Nome:' type='text' name='name' max='40' />
          <Input label='Email:' type='text' name='email' max='40' />
          <Input label='CPF:' type='number' name='cpf' max='11' />
          <Input label='Endereço:' type='text' name='endereco' max='200' />
          <Input label='Cidade:' type='text' name='cidade' max='28'/>
          
          <label htmlFor="">
            Estado:
            <select name="estado" >
              {arrayEstados.map(({ nome, uf }) => (
                <option key={uf} value={uf}>{ nome }</option>
              ))}
            </select>
          </label>
          
          <label>
            Tipo:
            <input type="radio" name ='tipo' value='casa' />Casa
            <input type="radio" name ='tipo' value='apto' />Apartamento
          </label>

        </fieldset>

        <fieldset>

          <label>
            Resumo do Currículo:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>

          <label>
            Cargo:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>

          <label>
            Descrição do cargo:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>

        
          
        </fieldset>
      </forms>
    );
  }
}

export default Forms;
