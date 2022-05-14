import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import Register from './pages/Register';
import LoginFailed from './pages/LoginFailed';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/registered-customers" component={ RegisteredCustomers } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="*" component={ LoginFailed } />
      </Switch>
    );
  }
}

export default App;
