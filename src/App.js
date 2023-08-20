import './App.css';
import React from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { Routes, Route } from "react-router-dom"


function App() {
  let [mode, setMode] = React.useState(false);



  let modeToogle = () => {
    if (mode) {
      document.body.style.backgroundColor = "white";
      setMode(!mode);
    } else {
      document.body.style.backgroundColor = "#212529";
      setMode(!mode);
    }
  };
  return (
    <div className={`h-full`}>
      <div className='relative'>
        <Navbar title='' modeToogle={modeToogle} mode={mode} />
      </div>

      <Routes>
        <Route path="/" element={<TextForm label="Hey" mode={mode} />} />
        <Route path="about" element={<About />} />

      </Routes>
      <About />
    </div>
  );
}

export default App;
