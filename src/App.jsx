import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home.jsx'
import ReactDOM from "react-dom/client";
import About from './pages/about.jsx';
import Skills from './pages/skills.jsx';
import Hdv from './pages/hdv.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Skills" element={<Skills />} />
        <Route path="/HDV" element={<Hdv />} />  // agregado HDV a la ruta de navegación
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
