import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import UserAccountPage from "./components/userAccountPage.jsx";


const App = () => {
const [favorites, setFavorites] = useState([]);
  return (
    <Router>
      <div className="page">
        <Header />
          <Routes>
            {/* The main functionality is rendered at the root URL "/Home" here */}
            <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites}  />} /> 
            
            {/* Other routes for pages */}
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/UserAccountPage" element={<UserAccountPage favorites={favorites} setFavorites={setFavorites} />} /> 
          </Routes>
        <Footer />
        <div className="spacer-bottom" />
      </div>
    </Router>
  );
};

export default App;
