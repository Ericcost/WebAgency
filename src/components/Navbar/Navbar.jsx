import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import ReactSwitch from 'react-switch';

function Navbar() {
  const theme = useContext(ThemeContext);
  
  return ( 
    <div className='navbar'>
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <div className='switch'>
        <label> {theme.theme === "light" ? "Light Mode" : "Dark Mode"} </label>
        <ReactSwitch onChange={theme.toggleTheme} checked={theme.theme === 'dark'} />
      </div>
    </div>
  )
}

export default Navbar;