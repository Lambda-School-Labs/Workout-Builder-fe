import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import GoogleLogo from '../../img/google_icon.png';
import { Link } from '@reach/router';

// localStorage.setItem("logged-in-user", {first_name: data.first_name, last_name: data.last_name, email: credentials.email})
// Dispatch({ type: "SET_LOGGED", payload: localStorage.getItem('logged-in-user')});

const Login = (props) => {
  const Dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setLogged] = useState(false);

  const setLoggedInUser = (data) => {
    localStorage.setItem("logged-in-email", credentials.email);
    localStorage.setItem("logged-in-first-name", data.first_name);
    localStorage.setItem("logged-in-last-name", data.last_name);
    Dispatch({ type: "SET_LOGGED", payload: {first_name: data.first_name, last_name: data.last_name, email: credentials.email}});
  };

  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    // post request to retrieve a token from the backend
    console.log(props);
    e.preventDefault();
    axios
      .post("https://labs20-workout-builder.herokuapp.com/auth/login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        setLoggedInUser(response.data);
        // once token is handeled, navigate to profile page
        props.navigate("/");
        Dispatch({ type: "UPDATE"});
      })
      .catch(err => {
        console.log("there was an error");
        console.log(err);
      });
  };

  const authWithGoogle = (e) => {
    e.preventDefault();
    window.open('http://localhost:4000/auth/google', '_self');
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  },[props.updates]);

  if(isLoggedIn && props.loggedInUser) {
    return (
      <div className="flex flex justify-center self-center py-20 bg-gray-500">
        <div className="w-full max-w-md bg-white pt-8" >
          <p>Welcome {props.loggedInUser.first_name} {props.loggedInUser.last_name}, you are already logged in!</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex justify-center self-center py-20 bg-gray-500">
        <div className="w-full max-w-md bg-white pt-8" >
          <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">

            <h1 className="flex justify-center mb-12 text-5xl">Login</h1>

            <button
              className="flex justify-center items-center relative hover:bg-blue-300 text-white border-2 font-bold py-2 px-4 w-full h-16 rounded text-gray-700 focus:outline-none focus:shadow-outline"
              onClick={authWithGoogle}
            >
              <img src={GoogleLogo} alt="Google Logo" className="absolute left-0 ml-5"/>
              <p className="text-xl">Login with Google</p>
            </button>

            <p className="w-full text-center border-b leading-middle my-10 inline-block border-black">
              <small className="bg-white px-2 text-base">Or</small>
            </p>

            <div className="py-2 pb-2">
              <label htmlFor="email" className="text-sm block text-xl">Email</label>
              <input
                className="textshadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-500"
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </div>

            <div className="py-2 pb-2">
              <label 
                htmlFor="password" 
                className="text-sm block text-xl">
                                Password
              </label>
              <input
                className="textshadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-500"
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </div>

            <button className="hover:bg-blue-300 bg-gray-500 py-2 px-4 my-4 w-full h-16 rounded text-white text-3xl focus:outline-none focus:shadow-outline" type="submit" onClick={login}>
                            Login
            </button>

            <div>Not a member yet? <Link to="/signup" className="text-blue-700 hover:font-bold">Sign Up</Link></div>
                        
            <div>Forgot Password? <Link to="/forgot-password" className="text-blue-700 hover:font-bold">Recover Password</Link></div>
            <br/><br/><br/>
          </form>
        </div>
      </div>
    );
  }

    

};
    
const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  updates: state.updates,
});


export default connect(
  mapStateToProps,
)(Login);


















    