import React from 'react';
import SignUp from './containers/auth/signUp/index';
import SignIn from './containers/auth/signIn/index';
import Dashboard from './containers/dashboard/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/signin" />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
