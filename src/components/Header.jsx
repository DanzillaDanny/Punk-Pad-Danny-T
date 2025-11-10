import React from "react";
import desktopLogo from "./desktopLogo.png";

const Header = ({ onCreateAccount, onLogin, className = "" }) => {
  return (
    <header className={"full-width-bar " + className}>
          <img src={desktopLogo} alt="Punk Pad logo" className="logo" />
    <nav className = "buttons-container">
          <button className="btn btn-primary" onClick={onCreateAccount}>Create Account</button>
          <button className="btn btn-secondary" onClick={onLogin}>Log In</button>
        </nav>
    </header>
  );
};

export default Header;
