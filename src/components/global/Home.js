import React from 'react';
import{ Link } from "@reach/router";

const Home= () => {
  return (
    <div className="h-screen bg-cornflower-blue">
      <div className="pt-24 flex flex-col items-center lg:px-8 lg:pt-8 lg:flex-row">
        <h1 className="font-display text-4xl text-blaze-orange lg:flex-grow">Stronger Faster</h1>
        <div className="mt-24 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:w-auto">
          <Link to="/login" className="py-4 font-semibold text-blaze-orange bg-white border border-blaze-orange rounded px-20 text-center lg:mr-4 lg:py-2 lg:px-12">Login</Link>
          <Link to="/signup" className="mt-4 py-4 font-semibold text-white bg-blaze-orange rounded px-20 text-center lg:mt-0 lg:py-2 lg:px-12 lg:whitespace-no-wrap">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
