import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePersonalAction } from '../redux/actions/action';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado } = this.state;
    const states = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    const { onSubmitPersonal, history } = this.props;
    const personalFormsObject = { nome, email, cpf, endereco, cidade, estado };
    return (
      <fieldset>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ nome }
          name="nome"
          id="nome"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          id="email"
          required
        />
        <Input
          label="CPF: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          id="cpf"
          required
        />
        <Input
          label="Endereco: "
          type="text"
          onChange={ this.handleChange }
          value={ endereco }
          name="endereco"
          id="endereco"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="cidade"
          id="cidade"
          value={ cidade }
        />
        <Select
          defaultOption="Selecione"
          defaultValue="selecione"
          onChange={ this.handleChange }
          value={ estado }
          label="Estado: "
          id="estado"
          name="estado"
          options={ states }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ () => {
            onSubmitPersonal(personalFormsObject);
            history.push('/professionalform');
          }}
        />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  onSubmitPersonal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitPersonal: (payload) => dispatch(updatePersonalAction(payload)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
