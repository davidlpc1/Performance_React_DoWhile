import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserView from './components/UserView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/:user" component={UserView} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);

