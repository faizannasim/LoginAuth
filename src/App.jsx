import React from 'react';
import Register from './Component/Register';
import Dashboard from './Component/Dashboard';
import LoginPage from './Component/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />          
        <Route path="/login" element={<LoginPage />} />   
        <Route path="/register" element={<Register />} />   
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
