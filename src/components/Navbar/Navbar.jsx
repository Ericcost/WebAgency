import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <div className='navbar'>
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
    </div>
  )
}

export default Navbar;