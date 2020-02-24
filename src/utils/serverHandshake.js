import axios from "axios";

export default function serverHandshake(auth) {
  const options = {
    baseURL: process.env.REACT_APP_BACKEND_URL
  };

  if (auth) {
    const token = localStorage.getItem("token");
    options.headers = {
      authorization: `Bearer ${token}`
    };
  }

  return axios.create(options);
}
