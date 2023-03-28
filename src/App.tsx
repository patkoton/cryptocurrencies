import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Cryptoz from './pages/Cryptoz';
import CryptCal from './pages/CryptCal';

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Cryptoz/>}/>
        <Route path='/crypt' element={<CryptCal/>}/>
      </Routes>        
  );
}

export default App;
