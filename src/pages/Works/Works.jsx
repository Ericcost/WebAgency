import React, { useState, createContext } from 'react';
import Navbarworks from '../../components/Navbarworks/Navbarworks'

export const DisplayContext = createContext(null);

const Works = () => {

  const [display, setDisplay] = useState('link');
  const toggleDisplay = () => {
    setDisplay((currentDisplay) => (currentDisplay === 'link' ? 'card' : 'link'));
  }

  return (
    <section id={display}>
      <DisplayContext.Provider value={{ display, toggleDisplay }}>
        <Navbarworks />
      </DisplayContext.Provider>
    </section>
  )
};

export default Works;