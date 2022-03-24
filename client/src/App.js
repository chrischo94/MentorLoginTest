import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages';
import Signin from './pages/signin'
import Mentors from './pages/Mentors'
import CoachingInfo from './pages/CoachingInfo'
import LeadershipInfo from './pages/LeadershipInfo'
import MentoringInfo from './pages/MentoringInfo'
import RetirementInfo from './pages/RetirementInfo'





// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

import './App.css'

function App() {
    return (
      <Router>
        <ScrollToTop></ScrollToTop>
          <Routes>
            <Route exact path="/" component={PrivateScreen} >
              <Route path="/" element={<Home/>} />
              </Route>
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
       
            <Route path="/signin" element={<Signin/>} />
            <Route path="/Mentors" element={<Mentors/>} />
            <Route path="/CoachingInfo" element={<CoachingInfo/>} />
            <Route path="/LeadershipInfo" element={<LeadershipInfo/>} />
            <Route path="/MentoringInfo" element={<MentoringInfo/>} />
            <Route path="/RetirementInfo" element={<RetirementInfo/>} />
            <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          </Routes>
      </Router>
    );
  }


export default App;
