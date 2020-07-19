import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Context from './store/context';
import { Login } from './Login';
import { Jobs } from './Jobs';
import './App.css';

function App() {
  const { globalState, globalDispatch } = useContext(Context);
  window._store = { globalState, globalDispatch };
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;