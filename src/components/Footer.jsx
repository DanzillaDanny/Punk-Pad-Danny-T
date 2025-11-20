import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
                  <Link to= "/About" className="about">About</Link>
                <div className="bar-center">© {new Date().getFullYear()} Punk Pad</div> 
        </footer>
    );
};

export default Footer;
