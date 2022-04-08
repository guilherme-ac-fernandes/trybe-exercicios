import React from "react";
import Input from "./Input";
import TextArea from './TextArea'
import arrayEstados from './arrayEstados';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      descricao: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <section className="forms-container">
        <fieldset>

          <Input
            handleChange={this.handleChange}
            label='Nome:' 
            type='text' 
            name='name' 
            max='40' />
          <Input
            handleChange={this.handleChange} 
            label='Email:' 
            type='text' 
            name='email' 
            max='40' />
          <Input 
            handleChange={this.handleChange}
            label='CPF:' 
            type='number' 
            name='cpf' 
            max='11' />
          <Input 
            handleChange={this.handleChange}
            label='Endereço:' 
            type='text' 
            name='endereco' 
            max='200' />
          <Input 
            handleChange={this.handleChange}
            label='Cidade:' 
            type='text' 
            name='cidade' 
            max='28'/>
          
          <label>
            Estado:
            <select onChange={this.handleChange} name="estado" >
              {arrayEstados.map(({ nome, uf }) => (
                <option key={uf} value={uf}>{ nome }</option>
              ))}
            </select>
          </label>
          
          <label>
            Tipo:
            <input onChange={this.handleChange} type="radio" name ='tipo' value='casa' />Casa
            <input onChange={this.handleChange} type="radio" name ='tipo' value='apto' />Apartamento
          </label>

        </fieldset>

        <fieldset>

          <TextArea
            handleChange={this.handleChange}
            name='curriculo' 
            label='Resumo do Currículo:' 
            max='1000' />
          <TextArea 
            handleChange={this.handleChange}
            name='cargo' 
            label='Cargo:' 
            max='40' />
          <TextArea 
            handleChange={this.handleChange}
            name='descricao' 
            label='Descrição do cargo:' 
            max='500' />
          
        </fieldset>
      </section>
    );
  }
}

export default Forms;
