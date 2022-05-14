import React from 'react';
import { Link } from 'react-router-dom';

class LoginFailed extends React.Component {
  render() {
    return (
      <>
        <h1>Login não efetuado</h1>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default LoginFailed;
