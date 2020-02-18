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

const App = props => (
  <Router>
    <Login path="login" {...props} />
    <SignUp path="signup" {...props} />
    <GoogleAuth path="auth" />
    <NavBar path="/">
      <Home path="home" />
      <PrivateRoute as={Dashboard} path="dashboard" />
      <PrivateRoute as={Program} path="/program" {...props} />
      <PrivateRoute as={ProgramCreation} path="/program/create" {...props} />
      <PrivateRoute as={ProgramEdit} path="/program/edit" {...props} />
    </NavBar>
  </Router>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);

export default App;
