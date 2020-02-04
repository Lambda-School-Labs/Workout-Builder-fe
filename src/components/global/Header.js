import React from 'react';
import { Link } from '@reach/router';

export default function Header(){
  return(
    <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <Link to="/" className="no-underline text-grey-darkest hover:text-black">
            WERKout Builder
          </Link>
        </h1>

        <Link to="/" className="text-black hover:text-orange md:hidden">
          <i className="fa fa-2x fa-bars"></i>
        </Link>
      </div>
      <nav>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <Link to="/" className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
          About
            </Link>
          </li>
          <li className="md:ml-4">
            <Link to="/" className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
          Contact
            </Link>
          </li>
          <li className="md:ml-4">
            <Link to="/login" className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
          Login
            </Link>
          </li>
          <li className="md:ml-4">
            <Link to="/signup" className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">
          Sign Up
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );}