// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Faculty from './components/Faculty';
import TeamInfo from './components/TeamInfo';
import { AuthProvider } from './context/AuthContext'; 
import LoginPage from './components/Loginpage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />}></Route>
            {/* <Route index element={<Home />} /> */}
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/teaminfo" element={<TeamInfo />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
