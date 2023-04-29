import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {

  const [users, setUsers] = useState([]);

  return (

    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
