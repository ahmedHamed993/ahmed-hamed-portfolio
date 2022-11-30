import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import {ThemeProvider, styled} from "styled-components";
//  theme colors 
import { lightTheme, darkTheme } from './components/themeColors.js';
//  pages 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
// components 
import Navbar from './components/Navbar.js';
import {StyledMain} from './components/StyledComponents';

function App() {
  let savedTheme = localStorage.getItem("mode") || "light";
  const [appTheme, setAppTheme] = useState(savedTheme);

  return (
    <ThemeProvider theme={appTheme === "light" ? lightTheme : darkTheme}>
      <StyledMain className="App" style={{maxWidth:'100%', overflow':hidden'}} >
        <Navbar appTheme={appTheme} setAppTheme={setAppTheme} />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/projects" element={<Projects/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
      </StyledMain>
    </ThemeProvider>
  );
}

export default App;
