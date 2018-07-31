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

      <span>Found in <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">Taming the State in React</a></span> | <span>Star the <a href="https://github.com/rwieruch/react-firebase-authentication">Repository</a></span> | <span>Receive a <a href="https://www.getrevue.co/profile/rwieruch">Developer's Newsletter</a></span>
    </div>
  </Router>

export default withAuthentication(Register);