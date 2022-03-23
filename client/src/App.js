import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages';
import Signin from './pages/signin'
import Mentors from './pages/Mentors'
import CoachingInfo from './pages/CoachingInfo'
import LeadershipInfo from './pages/LeadershipInfo'
import MentoringInfo from './pages/MentoringInfo'
import RetirementInfo from './pages/RetirementInfo'
import './App.css'

function App() {
    return (
      <Router>
        <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/Mentors" element={<Mentors/>} />
            <Route path="/CoachingInfo" element={<CoachingInfo/>} />
            <Route path="/LeadershipInfo" element={<LeadershipInfo/>} />
            <Route path="/MentoringInfo" element={<MentoringInfo/>} />
            <Route path="/RetirementInfo" element={<RetirementInfo/>} />
          </Routes>
      </Router>
    );
  }


export default App;
