import React from 'react';
import Navigation from "../Navigation"
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../constants/routes';

import './index.css';

const Register = () =>
  <Router>
    <div className="app">

        <Navigation />

      <hr/>

      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />

      <hr/>

    </div>
  </Router>

export default withAuthentication(Register);