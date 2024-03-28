import React from 'react';
import './App.css';
import Dashboard from './Components/dashboard/dashboard';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainNavbar from "./Components/dashboard/main-navbar/mainNavbar";

const App = () => {
  return (
      <Router>
          <MainNavbar/>
          <Routes>
              <Route path="/"/>
              <Route path="/survey"/>
              <Route path="/chat" element={<Dashboard/>}/>
          </Routes>
      </Router>
  );
};

export default App;