import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import Navbar from './components/Navbar/Navbar';
import Navbarworks from './components/Navbarworks/Navbarworks';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:projectsCat" element={<Navbarworks />} />
        </Routes>
      </main>
    </BrowserRouter>
    
  )
}

export default App
