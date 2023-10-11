// src/App.js
import React, { createContext, useReducer , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Faculty from './components/Faculty';
import TeamInfo from './components/TeamInfo';
import { AuthProvider } from './context/AuthContext'; 
import LoginPage from './components/Loginpage';
//import LogoutPage from './components/Logoutpage';
import { initialState,reducer } from './reducer/UseReducer';
import RegisterPage from './components/Registerpage';

export const UserContext=createContext();

// Custom hook to redirect to the home page on refresh
export function useRefreshRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleRefresh = (e) => {
      if (e.persisted) {
        // If the refresh was initiated by the user (e.g., pressing F5), navigate to the home page
        navigate('/');
      }
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, [navigate]);

  useEffect(() => {
    if (location.pathname === '/') {
      // If the current route is already the home page, navigate to it to trigger the effect
      navigate('/');
    }
  }, [location.pathname, navigate]);

  return null;
}

const App = () => {
  const[state,dispatch]=useReducer(reducer,initialState);


  return (
    
    <UserContext.Provider value={{state,dispatch}}>
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <useRefreshRedirect />
          <Routes>
          <Route path="/" element={<Home />}></Route> 
           <Route path="/login" element={<LoginPage />} /> 
            <Route path="/register" element={<RegisterPage />} />
            {/*<Route index element={<Home />} />*/}
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/teaminfo" element={<TeamInfo />} />
            {/*<Route path="/logout" element={<LogoutPage />} />*/}
          </Routes>
         
        </div>
      </Router>
    </AuthProvider>
    </UserContext.Provider>
  );
};

export default App;
