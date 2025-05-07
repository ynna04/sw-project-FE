// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home'; // ← 추가

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} /> {/* ← 홈 라우트 추가 */}
    </Routes>
  );
}

export default App;
