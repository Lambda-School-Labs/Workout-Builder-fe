import React from 'react';
import { Router } from "@reach/router";
import Header from './components/global/Header';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import GoogleAuth from './utils/googleAuth';
import Dashboard from "./components/dashboard/Dashboard";
import Program from "./components/program/ProgramHome";
import ProgramCreation from "./components/program/ProgramCreation";
import ProgramEdit from "./components/program/ProgramEdit";
import ProgramPreview from './components/program/ProgramPreview';

const App = (props) => (
  <div>
    <Header/>
    <Router>
      <Home exact path="/" />
      <Dashboard exact path="/dashboard" />
      <Program exact path="/program" {...props}/>
      <ProgramCreation exact path="/program/create" {...props} />
      <ProgramEdit exact path="/program/edit" {...props} />
      <ProgramPreview exact path="/program/preview" {...props} />
      <Login exact path="/login" {...props}/>
      <SignUp exact path="/signup" {...props}/>
      <GoogleAuth path="/auth" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);


export default App;
