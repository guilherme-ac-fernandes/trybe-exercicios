import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      invalidEmail: false,
      buttonStatus: false,
    } 
  }

  handleChange = ({ target }) => {
     const { name } = target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     this.setState({
      [name]: value,
    }, () => {
      const { email } = this.state; 
      const emailValidation = !!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if(emailValidation) {
        this.setState({ invalidEmail: emailValidation })
      }
    });
  }

  handleClick = () => {
    const { name, email, message } = this.state; 
    const validation = {
      name: name.length > 0,
      email: email.length > 0,
      emailString: (!!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)),
      message: message.length > 0,
    }
    this.setState({ buttonStatus: true });
    const buttonStatus = Object.values(validation).every((item) => item === true);
    if (buttonStatus) {
      this.setState({
        name: '',
        email: '',
        message: '',
        invalidEmail: false,
        buttonStatus: false,
      });
    }
  }

  render() {
    const { name, email, invalidEmail, message, buttonStatus } = this.state;
    return (
      <div>
        <h3 data-testid="contact-title">Contact</h3>
        <label htmlFor="name">
          Nome:
          <input 
            type="text" 
            name="name" 
            id="name"
            value={ name }
            onChange={ this.handleChange }
            required
          />
        </label>
        { name.length === 0 && buttonStatus && <span>O campo "Nome" é obrigatório</span>}

        <br />

        <label htmlFor="email">
          Email:
          <input 
            type="email" 
            name="email" 
            id="email"
            value={ email }
            onChange={ this.handleChange } 
          />
        </label>
        {!invalidEmail && buttonStatus && <span>Email inválido</span>}

        <br />

        <label htmlFor="message">
          Mensagem de Contato:
          <textarea 
            name="message" 
            id="message" 
            cols="30" 
            rows="10"
            value={ message }
            onChange={ this.handleChange } 
          />
        </label>
        {message.length === 0 && buttonStatus && <span>O campo "Mensagem de Contato" é obrigatório</span>}
        <button type="submit" onClick={ this.handleClick }>Enviar</button>
      </div>
    );
  }
}

export default Contact;
