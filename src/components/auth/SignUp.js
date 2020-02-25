import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "@reach/router";
import serverHandshake from "../../utils/serverHandshake";
import { fetchAllData } from '../actions';

const SignUp = ({ navigate }) => {
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInput = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const authWithGoogle = () => {
    const { REACT_APP_BACKEND_URL } = process.env;
    window.open(`${REACT_APP_BACKEND_URL}/auth/google`, "_self");
  };

  const handleSignup = async event => {
    event.preventDefault();
    try {
      const response = await serverHandshake().post(
        "/auth/register",
        credentials
      );
      if (response.status === 201) {
        for (const key in response.data) localStorage.setItem(key, response.data[key]);
        await fetchAllData(dispatch);
        navigate("/dashboard");
      } else {
        console.error("Something went wrong;", response.statusText);
      }
    } catch (error) {
      setError(error.response.data.message.toLowerCase());
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="lg:bg-cornflower-blue h-screen lg:flex lg:items-center">
      <div className="flex flex-col items-center p-4 font-body w-full max-w-xl mx-auto lg:bg-white lg:rounded-lg lg:px-20">
        <h2 className="text-4xl mt-4 mb-8">Sign Up</h2>
        <button
          className="flex items-center justify-center w-full py-3 border rounded relative"
          onClick={authWithGoogle}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 ml-4"
          >
            <path
              d="M34.5253 15.8989H33.25V15.8332H19V22.1665H27.9482C26.6427 25.8533 23.1348 28.4998 19 28.4998C13.7536 28.4998 9.49996 24.2462 9.49996 18.9998C9.49996 13.7535 13.7536 9.49984 19 9.49984C21.4217 9.49984 23.6249 10.4134 25.3024 11.9057L29.7809 7.42725C26.953 4.7918 23.1705 3.1665 19 3.1665C10.256 3.1665 3.16663 10.2559 3.16663 18.9998C3.16663 27.7438 10.256 34.8332 19 34.8332C27.7439 34.8332 34.8333 27.7438 34.8333 18.9998C34.8333 17.9382 34.724 16.9019 34.5253 15.8989Z"
              fill="#FFC107"
            />
            <path
              d="M4.99219 11.6302L10.1942 15.4453C11.6018 11.9603 15.0107 9.49984 18.9999 9.49984C21.4216 9.49984 23.6249 10.4134 25.3024 11.9057L29.7809 7.42725C26.953 4.7918 23.1704 3.1665 18.9999 3.1665C12.9184 3.1665 7.64427 6.59996 4.99219 11.6302Z"
              fill="#FF3D00"
            />
            <path
              d="M19 34.8334C23.0898 34.8334 26.8059 33.2683 29.6155 30.7231L24.7151 26.5763C23.072 27.8259 21.0643 28.5017 19 28.5001C14.8818 28.5001 11.385 25.8741 10.0677 22.2095L4.90442 26.1876C7.52484 31.3152 12.8464 34.8334 19 34.8334Z"
              fill="#4CAF50"
            />
            <path
              d="M34.5254 15.8992H33.25V15.8335H19V22.1668H27.9482C27.3237 23.9215 26.1989 25.4548 24.7127 26.5772L24.715 26.5756L29.6155 30.7224C29.2687 31.0375 34.8333 26.9168 34.8333 19.0002C34.8333 17.9385 34.7241 16.9022 34.5254 15.8992Z"
              fill="#1976D2"
            />
          </svg>
          <span className="text-dove-grey font-semibold text-lg">
            Sign up with Google
          </span>
        </button>
        <div className="w-full separator font-medium text-sm mt-4">Or</div>
        {error && (
          <p
            className="text-red py-2 text-center"
            style={{ fontVariant: "small-caps" }}
          >
            {error}
          </p>
        )}
        <form className="w-full" onSubmit={handleSignup}>
          <div className="flex flex-col mt-2">
            <label
              htmlFor="first_name"
              className="font-medium text-sm text-grey"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="border border-light-grey rounded p-2"
              onChange={handleInput}
              value={credentials.first_name || ""}
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label
              htmlFor="last_name"
              className="font-medium text-sm text-grey"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="border border-light-grey rounded p-2"
              onChange={handleInput}
              value={credentials.last_name || ""}
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="font-medium text-sm text-grey">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-light-grey rounded p-2"
              onChange={handleInput}
              value={credentials.email || ""}
              required
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password" className="font-medium text-sm text-grey">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-light-grey rounded p-2"
              onChange={handleInput}
              value={credentials.password || ""}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 py-2 w-full bg-blaze-orange rounded font-semibold text-white text-xl"
            data-testid="signup"
          >
            Sign Up
          </button>
        </form>
        <div className="flex self-start text-xs mt-2">
          <p className="text-grey mr-1">Already a member?</p>
          <Link to="/login" className="text-blue">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
