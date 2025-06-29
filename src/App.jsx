import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Write from './pages/Write';
import UserProfile from './pages/UserProfile';
import FriendProfile from './pages/FriendProfile';
import FriendList from './pages/FriendList';
import StorageBox from './pages/StorageBox';
import Setting from './pages/Setting';
import ProfileEditor from './components/ProfileEditor';
import './App.css';

function App() {
  const isLoggedIn = true;

  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/write/:diaryId" element={<Write />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/profile/:id" element={<FriendProfile />} />
      <Route path="/friend-list" element={<FriendList />} />
      <Route path="/storagebox" element={<StorageBox />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default App
