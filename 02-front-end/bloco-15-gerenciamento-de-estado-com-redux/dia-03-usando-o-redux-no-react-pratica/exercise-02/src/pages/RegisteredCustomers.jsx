import React from 'react';
import LoginFailed from './LoginFailed';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends React.Component {
  render() {
    const { loginInfo, allCustumers } = this.props;
    if (!('email' in loginInfo)) {
      return <LoginFailed />
    }
    return (
      <>
        <h1>Clientes cadastrados</h1>
        <p>{loginInfo.email}</p>
        <p>{loginInfo.password}</p>
        
        <section>
          {allCustumers.length === 0 ? (
            <p>Nenhum cliente cadastrado</p>
          ) : (
            <ul>
            {allCustumers.map((customer, index) => 
              <li key={ index }>{customer.name}</li>)}
            </ul>
          )}
          <Link to="/register">Cadastro</Link>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loginInfo: state.reducer.loginInfo,
  allCustumers: state.reducer.allCustumers,
});

export default connect(mapStateToProps)(RegisteredCustomers);
