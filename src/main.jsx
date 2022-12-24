import React from 'react'
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./styles/index.scss";
import Profile from './pages/Profile/Profile';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
)
