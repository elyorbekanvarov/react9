import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <h3>MyApp</h3>
          <p>© 2026 All Rights Reserved</p>
        </div>
        <div className="footer-right">
          <Link to="/">Home</Link>
          <Link to="/albom">Albums</Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            React
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
