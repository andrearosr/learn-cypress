import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="Login">
      Log In
      <form className="Login-form" noValidate>
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