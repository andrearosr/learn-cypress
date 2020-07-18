import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../store/context';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { globalState, globalDispatch } = useContext(Context);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:9000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log('response ok')
      globalDispatch({ type: 'LOGIN' });
    } 
  }

  if (globalState.loggedIn) {
    return <Redirect to="/jobs" />;
  }

  return (
    <div className="Login">
      <h1 data-test="login=title">
        Log In
      </h1>
      <form className="Login-form" onSubmit={handleSubmit} noValidate>
        <div className="Login-form-fields">
          <label>
            Email
            <input
              data-test="input-email"
              id="input-email"
              className="Login-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              data-test="input-password"
              id="input=password"
              className="Login-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="Login-form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export { Login };