import React from "react";
import { Link } from "react-router-dom";
import desktopLogo from "./desktopLogo.png";

const Header = ({className = "" }) => {
  return (
    <header className={"full-width-bar " + className}>
      {/*the logo links to the home page*/}
      <Link to="/Home"><img src={desktopLogo} alt="Punk Pad logo" className="logo" />
      </Link>
       <nav className = "buttons-container">
      <Link to= "/Signup" className="btn btn-primary">
      Create Account
      </Link>
      <Link to="/Login" className="btn btn-secondary">
      Log In
      </Link>
        </nav>
    </header>
  );
};

export default Header;
