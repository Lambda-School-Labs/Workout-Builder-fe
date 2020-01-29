import React from 'react';
import { Router } from "@reach/router";
import Header from './components/global/Header';
import Login from './components/auth/Login';

const App = (props) => (
  <div>
    
    <Header/>
    <Router>
      <Home exact path="/" />
      <Login exact path="/login" {...props}/>
      <SignUp path="/SignUp"/>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);



const SignUp = () => (
  <div>
    <h1>welcome to the temporary SignUp page till it is set up</h1>
  </div>
)
export default App;
