import React from 'react';
import './App.css';
import Dashboard from './Components/dashboard/dashboard';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import MainNavbar from "./Components/main-navbar/mainNavbar";
import HomeDashboard from "./Components/home-dashboard/home-dashboard";

const App = () => {
  return (
      <Router>
          <MainNavbar/>
          <Routes>
              <Route path="/" element={<HomeDashboard/>}/>
              <Route path="/chat" element={<Dashboard/>}/>
          </Routes>
      </Router>
  );
};

export default App;