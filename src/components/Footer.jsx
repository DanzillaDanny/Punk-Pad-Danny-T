import React from 'react';
import { Link } from "react-router-dom";

function Footer () {
    return (
    <footer className="full-width-bar">
  <div className="bar-center">© {new Date().getFullYear()} Punk Pad</div>
            <nav>
              <ul>
                {/* Use the correct <Link> components with valid paths */}
                <li><Link to="/About">About</Link></li>
              </ul>
            </nav>
</footer>
  );
}

export default Footer;