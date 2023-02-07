import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';

//components
import Navbar from './components/Navbar/Navbar';
import Navbarworks from './components/Navbarworks/Navbarworks';

//CSS
import './App.css'

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light'? 'dark' : 'light'));
  }

  return (
    <BrowserRouter>
      <section className='App' id={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:projectsCat" element={<Navbarworks />} />
            </Routes>
          </main>
        </ThemeContext.Provider>
      </section>
    </BrowserRouter>
    
  )
}

export default App
