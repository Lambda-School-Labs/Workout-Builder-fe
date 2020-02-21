import React from 'react';
import{ Link } from "@reach/router";

const Home= props => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 sm:flex-row sm:absolutesm:m-0 sm:mt-0 sm:w-screen sm:justify-start sm:justify-between bg-cornflower-blue">
      <h1 className="text-blaze-orange items-center text-4xl font-display pb-16 sm:pb-0 sm:ml-6">
      Stronger Faster
      </h1>
      <div className="flex flex-col items-center sm:flex sm:flex-row sm:items-center sm:justify-end sm:justify-between sm:mr-6">
        <Link to ="/login"><button className ="bg-white rounded text-blaze-orange border-2 border-blaze-orange rounded font-semibold text-sm mb-6 py-2 w-48 h-10 px-4 rounded sm:mb-0 sm:mr-6 ">Login</button></Link>
        <Link to ="/signup"><button className ="bg-blaze-orange rounded text-white font-semibold text-sm py-2 w-48 h-10 px-4 rounded">Sign Up</button></Link>
      </div>
    </div>
  );
};
export default Home;
