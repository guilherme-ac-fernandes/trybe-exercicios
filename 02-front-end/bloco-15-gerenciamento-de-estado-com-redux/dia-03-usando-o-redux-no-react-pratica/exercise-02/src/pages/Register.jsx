import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerAction } from '../redux/actions/actions';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { history, makeRegister } = this.props;
    makeRegister(this.state);
    history.push('/registered-customers');
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <>
        <h1>Cadastro</h1>
        <Link to="/registered-customers">Clientes cadastrados</Link>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          id="name"
          required
        />
        <Input
          label="Idade: "
          type="number"
          onChange={ this.handleChange }
          value={ age }
          name="age"
          id="age"
          required
        />
        <Input
          label="Email: "
          type="email"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          id="email"
          required
        />
        <Button
          type="button"
          label="register"
          onClick={ this.handleClick }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeRegister: (payload) => dispatch(registerAction(payload)),
});

export default connect(null, mapDispatchToProps)(Register);