import React from 'react';
import { Router } from "@reach/router";
import Header from './components/global/Header';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp'
import GoogleAuth from './utils/googleAuth';

const App = (props) => (
  
  <div>
    
    <Header/>
    <Router>
      <Home exact path="/" />
      <Login exact path="/login" {...props}/>
      <SignUp exact path="/signup" {...props}/>
      <GoogleAuth path="/google/:token/:first_name/:last_name" />
    </Router>
    
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);


export default App;
