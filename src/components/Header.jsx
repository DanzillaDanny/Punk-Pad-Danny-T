import React from "react";
import { Link } from "react-router-dom";
import desktopLogo from "./desktopLogo.png";

const Header = ({className = "" }) => {
  return (
    <header className={"full-width-bar " + className}>
      {/*the logo links to the home page*/}
      <Link to="/"><img src={desktopLogo} alt="Punk Pad logo" className="logo" />
      </Link>
       <nav className = "buttons-container">
      <Link to= "/Signup" className="header-link primary-punk-btn">
      Create Account
      </Link>
      <Link to="/Login" className="header-link secondary-punk-btn">
      Log In
      </Link>
        </nav>
    </header>
  );
};

export default Header;
