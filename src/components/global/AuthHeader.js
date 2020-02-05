import React, {useState} from 'react';
import { Link } from '@reach/router';
import HamburgerIcon from '../../img/list.png';

export default function AuthHeader(){
  const [isOpen, setIsOpen] = useState(false);

  if(isOpen === true){
    return (
      <div>
        <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gray-400">
          <div className="flex items-center  mb-4 md:mb-0 ">
            <button isopen={isOpen} onClick={() => setIsOpen(!isOpen)} className="block h-8 w-8">
              <img className="h-full w-full object-cover" src={HamburgerIcon} alt="hamburger icon"/>
            </button>
            <h1 className="leading-none text-2xl text-grey-darkest">
              <Link to="/" className="inline no-underline text-grey-darkest hover:text-black pl-2">
                Stronger Faster
              </Link>
            </h1>
          </div>
        </header>

        <div className="w-48 py-2 shadow-xl">
          <Link to="/home" className="block px-4 py-2 text-gray-darkset">Home</Link>
          <Link to="/programs" className="block px-4 py-2 text-gray-darkset">Programs</Link>
          <Link to="/teams" className="block px-4 py-2 text-gray-darkset">Clients</Link>
          <Link to="/library" className="bblock px-4 py-2 text-gray-darkset">Library</Link>
        </div>
      </div>

    );
  } else {
    return (
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gray-500">
        <div className="flex items-center mb-4 md:mb-0">
          <button isopen={isOpen} onClick={() => setIsOpen(!isOpen)} className="block h-8 w-8">
            <img className="h-full w-full object-cover " src={HamburgerIcon} alt="hamburger icon"/>
          </button>
          <h1 className="leading-none text-2xl text-grey-darkest sm:min-w-full md:min-w-full">
            <Link to="/" className="inline no-underline text-grey-darkest hover:text-black pl-2">
        Stronger Faster
            </Link>
          </h1>
        </div>
      </header>
    );

  }
}

