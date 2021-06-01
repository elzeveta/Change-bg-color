import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Simple from "./components/Simple"
import Hex from "./components/Hex"
import './App.css';

export default function App() {
    return (
      <Router>
      <div>
        <ul className="App">
          <li>
            <Link to="/Simple">Simple</Link>
          </li>
          <li>
            <Link to="/Hex">Hex</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/Simple">
            <Simple/>
          </Route>
          <Route path="/Hex">
            <Hex/>
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }


