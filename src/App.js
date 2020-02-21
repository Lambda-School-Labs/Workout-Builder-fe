import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/global/NavBar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import GoogleAuth from "./utils/GoogleAuth";
import Dashboard from "./components/dashboard/Dashboard";
import Program from "./components/program/ProgramHome";
import ProgramCreation from "./components/program/ProgramCreation";
import ProgramEdit from "./components/program/ProgramEdit";
import Home from './components/global/Home';

const App = props => (
  <Router>
    <Login path="login" {...props} />
    <SignUp path="signup" {...props} />
    <GoogleAuth path="auth" />
    <Home path="/" />
    <NavBar path="/">
      <PrivateRoute as={Dashboard} path="dashboard" />
      <PrivateRoute as={Program} path="program" {...props} />
      <PrivateRoute as={ProgramCreation} path="program/create" {...props} />
      <PrivateRoute as={ProgramEdit} path="program/edit" {...props} />
    </NavBar>
  </Router>
);

export default App;
