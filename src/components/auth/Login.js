import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

// sessionStorage.setItem("logged-in-user", {first_name: data.first_name, last_name: data.last_name, email: credentials.email})
// Dispatch({ type: "SET_LOGGED", payload: sessionStorage.getItem('logged-in-user')});

const Login = (props) => {
    const Dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [isLoggedIn, setLogged] = useState(false);

    const setLoggedInUser = (data) => {
        sessionStorage.setItem("logged-in-email", credentials.email);
        sessionStorage.setItem("logged-in-first-name", data.first_name);
        sessionStorage.setItem("logged-in-last-name", data.last_name);
        Dispatch({ type: "SET_LOGGED", payload: {first_name: data.first_name, last_name: data.last_name, email: credentials.email}});
    }

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
            sessionStorage.setItem("token", response.data.token);
            setLoggedInUser(response.data);
            // once token is handeled, navigate to profile page
            props.navigate("/");
            Dispatch({ type: "UPDATE"});
        })
        .catch(err => {
            console.log("there was an error");
            console.log(err);
        })
    };

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
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
                        <div className="px-4 pb-4">
                            <label htmlFor="email" className="text-sm block font-bold  pb-2">Email</label>
                                <input
                                className="textshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder="email"
                                type="text"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
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
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>  
                        <button className="bg-indigo-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={login}>
                            Login!
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    

}
    
const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
  });


export default connect(
    mapStateToProps,
)(Login);


















    