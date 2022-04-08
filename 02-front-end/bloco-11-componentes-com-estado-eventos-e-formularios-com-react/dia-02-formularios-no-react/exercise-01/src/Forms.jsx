import React from "react";

class Forms extends React.Component {
  render() {
    return (
      <>
        <fieldset>

          <label>
            Nome:
            <input type="text" />
          </label>

          <label>
            Email:
            <input type="text" />
          </label>

          <label>
            CPF:
            <input type="number" />
          </label>

          <label>
            Endereço:
            <input type="text" />
          </label>

          <label>
            Cidade:
            <input type="text" />
          </label>

          <label>
            Estado:
            <input type="text" />
          </label>

          <label>
            Tipo:
            <input type="radio" />Casa
            <input type="radio" />Apartamento
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
      </>
    );
  }
}

export default Forms;
