import React from 'react';
import { Router } from "@reach/router";
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import GoogleAuth from './utils/googleAuth';
import Dashboard from './components/dashboard/Dashboard';
// import PublicRoutes from './utils/routes/publicRoutes';
import ProtectedRoutes from './utils/routes/protectedRoutes';

const App = (props) => (
  <div>

    <Router>
      <Login as={Login} exact path="/" {...props}/>
      <SignUp as={SignUp} exact path="/signup" {...props}/>
      <GoogleAuth as={GoogleAuth} exact path="/auth" />
      <ProtectedRoutes as={Dashboard} path='/dashboard'/>

    </Router>
  </div>
);

export default App;

