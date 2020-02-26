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
import ExerciseLibraryPage from './components/library/ExerciseLibraryPage';
import ExerciseAdd from './components/library/ExerciseAdd';
import Exercise from "./components/library/Exercise";
import ExerciseEdit from "./components/library/ExerciseEdit"
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
      <PrivateRoute as={ProgramPreview} path="program/preview" {...props} />
      <PrivateRoute as={ExerciseLibraryPage} path = "library" {...props} />
      <PrivateRoute as={ExerciseAdd} path = "library/library/add"/>
      <PrivateRoute as ={Exercise} path = "library/:id" />
      <PrivateRoute as ={ExerciseEdit} path = "library/edit/:id"/>
    </NavBar>

  </Router>
);

export default App;
