import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";


const App = () => {

  return (
    <Router>
      <div className="page">
        <Header />
          <Routes>
            {/* The main functionality of your App is now rendered at the root URL "/" */}
            <Route path="/Home" element={<Home />} /> 
            
            {/* Other routes for your new pages */}
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        <Footer />
        <div className="spacer-bottom" />
      </div>
    </Router>
  );
};

export default App;
