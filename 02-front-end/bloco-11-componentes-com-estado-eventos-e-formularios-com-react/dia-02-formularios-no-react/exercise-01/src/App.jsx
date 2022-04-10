import React, { Component } from 'react';
import Forms from './Forms';
import FormError from './FormError';
import FormDisplay from './FormDisplay';
import './App.css';

// Resolução proveniente do course da Trybe com modificações de funcionalidade e correção de bugs
// source: https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/eventos-e-formularios-no-react/solutions/306d9a98-87b4-445b-9256-482909f5e918/conteudo/a675c67e-b553-4390-9904-82f6ed07ab20?use_case=calendar

const inicialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
  count: 0,
}

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = inicialState;
  }

  // Função que recebe os dados provenientes do formulário 
  // 1: realiza a modificação do nome para uppercase
  // 2: chama a verificação do endereço
  // 3: chama a função que realiza a atualização do estado
  changeHandler = ({ target }) => {
    let { name, value } = target;
    if (name === 'name') {
      value = value.toUpperCase();
    }
    if (name === 'address') {
      value = this.validateAdress(value);
    }
    this.updateState(name, value);
  }

  // Função que remove númeoros antes da cidade
  onBlurHandler = ({ target }) => {
    let { name, value } = target;
    if (name === 'city') {
      // ^ = no início da strind
      // \d/ ou /[0-9]/ = Encontra correspondência com um número. Equivalente a [0-9]
      value = value.match(/^\d/) ? '' : value;
    }
    this.updateState(name, value);
  }

  // Função que atualiza o estado (informações do input e adiciona erros no estado para impressão)
  updateState = (name, value) => {
    this.setState((state) => ({ // Como vou informa múltiplas informações coloca como arrow function para não sobreescrever
      [name]: value, // Faz a mudança do estado
      formError: { // informa que a chave formError do estado tbm será alterada
        ...state.formError, // espalha todas as informações que já existem no estado
        [name]: this.validateFiels(name, value), // faz a validação se a alteração e valida ou não (no caso do email)
      }
    }))
  }

  // Função que remove os caracteres especiais no endereço
  // Correção do endereço - remove caracter especial
  // A utilização de expressões regulares foi proveniente do StackOverflow 
  // link: https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
  validateAdress = (address) => {
    address.replace(/[^\w\s]/gi, '');
  }

  // Função que avalia o email
  validateFiels = (name, value) => {
    const empty = '';
    if (name === 'email') {
      // Validação do email proveniente do StackOverflow
      // link: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
      // qualquer string = /\S+@\S+\.\S+/
      // anystring@anystring.anystring = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const isValid = value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      return isValid ? empty : 'is invalid';
    }
    return empty;
  }

  // Função que remove o default do botão - não utilizada
  handleSubmit = (event) => {
    event.preventDefault();
  }

  // Função que reseta o estado
  resetForm = () => {
    this.setState(inicialState)
  }

  // Função que possibilita envio do formulário para impressão na tela
  sendForm = () => {
    this.setState({
      submitted: true
    })
  }

  updateCount = () => {
    this.setState((old, _props) => ({
      count: old.count + 1
    }));
  }

  render() {
    const { submitted, formError, count } = this.state;

    const { name, email, cpf, address, city, countryState, addressType, resume, role, roleDescription } = this.state;

    const objectValue = {
      name, email, cpf, address, city, countryState, addressType, resume, role, roleDescription
    };

    return (
      <section className='main-container'>
        <header className='header'>
          <h1>Formulário</h1>
        </header>
        <Forms 
        sendForm={ this.sendForm }
        resetForm={ this.resetForm }
        changeHandler={ this.changeHandler }
        currentState={ this.state }
        onBlurHandler={ this.onBlurHandler }
        updateCount = { this.updateCount }
        count = { count }
        objectValue = { objectValue }
        />
        <section className='container-extra'>
          {/* Seção que contem as informações, caso seja erro, impreme as informações de erro, caso contrário mostra as informações digitas para pessoa usuária */}
          <div>{<FormError formError={ formError } />}</div>
          {/* && consiste na condição - so será informado se submitted for true (If inline com o Operador Lógico &&) (link: https://pt-br.reactjs.org/docs/conditional-rendering.html) */}
          <div>{ submitted && <FormDisplay currentState={ this.state } />}</div>
        </section>
      </section>
    );
  }
}

export default App;
