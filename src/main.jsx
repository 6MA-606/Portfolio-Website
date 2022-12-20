import React from 'react'
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./styles/index.scss";



ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  </Router>
)
