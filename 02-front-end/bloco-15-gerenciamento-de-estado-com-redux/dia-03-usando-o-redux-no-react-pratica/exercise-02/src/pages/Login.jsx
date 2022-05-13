import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input'
import { loginAction } from '../redux/actions/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { history, makeLogin } = this.props;
    const { email, password } = this.state;
    const loginObject = { email, password }
    makeLogin(loginObject);
    history.push('/registered-customers');
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <h1>LOGIN</h1>
        <Input
          label="Email: "
          type="email"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          id="email"
          required
        />
        <Input
          label="Senha: "
          type="password"
          onChange={ this.handleChange }
          value={ password }
          name="password"
          id="password"
          required
        />
        <Button
          type="button"
          label="Login"
          onClick={ this.handleClick }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeLogin: (payload) => dispatch(loginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);