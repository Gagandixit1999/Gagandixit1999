import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './about.js';


import Home from './Home';
import Contact from './contact.js';



export default function Myroute() {
  return (
       
         <BrowserRouter>
         <Routes>
         <Route path='/home' element={Home}/>
         <Route path='/about' element={About}/>
         <Route path='/contact' element={Contact}/>
         </Routes>
         </BrowserRouter>
  );
}