import React, { useState } from 'react';
import api from '../../services/api';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    api.login(email, password);
  }

  return (
    <div className="Login">
      Log In
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