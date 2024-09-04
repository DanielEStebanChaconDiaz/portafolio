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
import { HashRouter, Routes, Route } from "react-router-dom"; // Cambiado a HashRouter

function App() {
  return (
    <HashRouter> {/* Cambiado a HashRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Skills" element={<Skills />} />
        <Route path="/HDV" element={<Hdv />} />  {/* Ruta HDV */}
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
