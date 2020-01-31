import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from '@reach/router'


const SignUp = (props) => {
    const Dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    const [isSignedUp, setSignedUp] = useState(false);
    const setSignedUpUser = (data) => {
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

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://labs20-workout-builder.herokuapp.com/auth/register";

    const signUp = e => {
        // post request to retrieve a token from the backend
        e.preventDefault();
        axios
        .post(proxyurl + url, credentials)
        .then(response => {
            sessionStorage.setItem("token", response.data.token);
            setSignedUpUser(response.data);
            // once token is handeled, navigate to profile page
            props.navigate("/");
            Dispatch({ type: "UPDATE"});
            
        })
        .catch(err => {
            console.log("there was an error attempting to SignUp");
            console.log(err);
        })
    };
    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setSignedUp(true);
        } else {
            setSignedUp(false);
        }
    },[props.updates]);
    if(isSignedUp && props.signedUpUser) {
        return (
            <div className="flex justify-center self-center py-20 bg-gray-500">
                <div className="w-full max-w-md bg-white pt-8" >
                    <p>Welcome {props.loggedInUser.first_name} {props.loggedInUser.last_name}, you signed up!</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex justify-center self-center py-20 bg-gray-500">
                <div className="w-full max-w-md bg-white pt-8" >
                    <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
                        <div className="px-4 pb-4">
                            <label htmlFor="first_name" className="text-sm block font-bold  pb-2">First Name</label>
                                <input
                                className="textshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder="First Name"
                                type="text"
                                name="first_name"
                                value={credentials.first_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="px-4 pb-4">
                            <label htmlFor="last_name" className="text-sm block font-bold  pb-2">last Name</label>
                                <input
                                className="textshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                                placeholder="Last Name"
                                type="text"
                                name="last_name"
                                value={credentials.last_name}
                                onChange={handleChange}
                            />
                        </div>
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
                        <button 
                            className="bg-indigo-900 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                            type="submit" 
                            onClick={signUp}>
                            Sign Up
                        </button>
                        <Link to="/login" className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
                            Already a Member? Login here
                        </Link>
                    </form>
                </div>
            </div>
        );
    }

    

}
// loggedInUser: state.loggedInUser,
// updates: state.updates,
const mapStateToProps = state => {
    return {...state}
};


export default connect(mapStateToProps)(SignUp);
