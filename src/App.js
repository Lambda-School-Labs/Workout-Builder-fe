import React from 'react';
import { Router, Link } from "@reach/router";
import Header from './components/global/Header'
const App = ({ children }) => (
  <div>
    <Header>
      <Link to="/">where is this link at</Link>
    </Header>
    <Router>
      <Home path="/" />
      <Login path="/login"/>
      <SignUp path="/SignUp"/>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome this is a temporary landing page till it is set up</h2>
  </div>
);
const Login = () => (
  <div>
    <div className="w-full max-w-md bg-white pt-8" >
    <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
    <div className="px-4 pb-4">
    <label htmlFor="email" className="text-sm block font-bold  pb-2">Username</label>
      <input
        className="textshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
        placeholder="username"
        type="text"

        name="username"

      />
    </div>
    <div className="px-4 pb-4">
      <label 
        htmlFor="password" 
        className="text-sm block font-bold pb-2">
        PASSWORD
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
        placeholder="Enter your password"
        type="password"
        name="password"
      />
    </div>  
      <button className="bg-indigo-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Login!
      </button>
        
    </form>
  </div>
  </div>
)
const SignUp = () => (
  <div>
    <h1>welcome to the temporary SignUp page till it is set up</h1>
  </div>
)
export default App;
