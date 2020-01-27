import React from 'react';

export default function Header(){
  return(
<header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
<div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-black" href="/">
        Workout-builder
      </a>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="/">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
  <nav>
    <ul class="list-reset md:flex md:items-center">
    <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/">
          About
        </a>
      </li>
      <li class="md:ml-4">
        <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/">
          Contact
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/login">
          Login
        </a>
      </li>
      <li class="md:ml-4">
        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="/SignUp">
          Sign Up
        </a>
      </li>
    </ul>
  </nav>


</header>
)}