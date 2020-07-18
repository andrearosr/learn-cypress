import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../../store/context';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { globalState, globalDispatch } = useContext(Context);

  function hasError() {
    let formError = null;
    if (!email || !password) {
      formError = 'Hey! Remember to fill in both fields';
      setError(formError);
    }

    return formError;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (hasError()) return;

    const response = await fetch('http://localhost:9000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
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
              className="Login-form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              data-test="input-password"
              id="input=password"
              className="Login-form-input"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">
          Submit
        </button>
        {error && (
          <div className="Login-form-error" data-test="login-error">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export { Login };