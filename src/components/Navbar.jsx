import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <nav>
      <div className="container nav-container">
        <Link to={"/"}>
          <h2>Logo</h2>
        </Link>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/albom"}>Alboms</Link>
        </div>
        <button
          className={`mode-toggle ${mode}`}
          onClick={() => setMode(prev => (prev === "light" ? "dark" : "light"))}
        >
          {mode === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
