import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/global/NavBar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import GoogleAuth from "./components/auth/GoogleAuth";
import Dashboard from "./components/dashboard/Dashboard";
import Program from "./components/program/ProgramHome";
import ProgramCreation from "./components/program/ProgramCreation";
import ProgramEdit from "./components/program/ProgramEdit";
import Home from './components/global/Home';
import ProgramPreview from './components/program/ProgramPreview';
import ProgramEditPreview from './components/program/ProgramEditPreview';
import ClientsHome from "./components/clients/ClientsHome";
import ClientView from "./components/clients/ClientView";
import LibraryDisplay from './components/library/LibraryDisplay';
import Exercise from './components/library/Exercise';

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
      <PrivateRoute as={ProgramPreview} path="program/preview" {...props} />
      <PrivateRoute as={LibraryDisplay} path="library">
        <PrivateRoute as={Exercise} path=":id" />
        <PrivateRoute as={Exercise} path=":id/edit" />
      </PrivateRoute>
      <PrivateRoute as={ProgramEdit} path="program/edit" {...props} />
      <PrivateRoute as={ProgramEditPreview} path="program/edit/preview" {...props} />
      <PrivateRoute as={ClientsHome} path="clients" {...props}/>
      <PrivateRoute as={ClientView} path="clients/view/:id" {...props}/>
    </NavBar>
  </Router>
);

export default App;
