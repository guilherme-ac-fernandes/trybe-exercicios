import React from 'react';
import LoginFailed from './LoginFailed';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { removeAction, updateSortedAction } from '../redux/actions/actions';

class RegisteredCustomers extends React.Component {
  handleSortedByName = () => {
    const { updateSorted } = this.props;
    updateSorted();

  }

  removeCustomer = (customer) => {
    const { removeObject } = this.props;
    removeObject(customer);
  }

  displayCustomers = () => {
    const { allCustumers, allCustumersSorted, sorted } = this.props;
    if(sorted) return allCustumersSorted
    return allCustumers
  }

  render() {
    const { loginInfo } = this.props;
    const customersToDisplay = this.displayCustomers();
    
    if (!('email' in loginInfo)) {
      return <LoginFailed />
    }
    return (
      <>
        <h1>Clientes cadastrados</h1>
        <p>{`Olá ${loginInfo.email}`}</p>
        <Link to="/register">Cadastro</Link>
        <Button
          type="button"
          label="Ordem Alfabética"
          onClick={ this.handleSortedByName }
        />
        
        <section>
          {customersToDisplay.length === 0 ? (
            <p>Nenhum cliente cadastrado</p>
          ) : (
            <ul>
            {customersToDisplay.map((customer, index) => 
              <li key={ index }>
                <p>{`Cadastro número ${ index + 1 }`}</p>
                <p>{`Cliente: ${customer.name}`}</p>
                <p>{`Idade: ${customer.age}`}</p>
                <p>{`email: ${customer.email}`}</p>
                <Button 
                  type="button" 
                  label="X" 
                  onClick={ () => this.removeCustomer(customer) }
                />
              </li>
            )}
            </ul>
          )} 
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loginInfo: state.reducer.loginInfo,
  allCustumers: state.reducer.allCustumers,
  allCustumersSorted: state.reducer.allCustumersSorted,
  sorted: state.reducer.sorted,
});

const mapDispatchToProps = (dispatch) => ({
  removeObject: (payload) => dispatch(removeAction(payload)),
  updateSorted: () => dispatch(updateSortedAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCustomers);
