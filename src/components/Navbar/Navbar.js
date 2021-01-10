import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (  
    <div className="w-full flex flex-row justify-between py-4 px-6 bg-purple-600">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white font-fortnite">Fortnite</h1>
      </Link>
      <div className="flex flex-row">
        <Link to="/about">
          <span className="text-white font-fortnite">About</span>
        </Link>
        <Link to="/collection">
          <span className="ml-8 text-white font-fortnite">Collection</span>
        </Link>
      </div>
    </div>
  );
}
 
export default Navbar;