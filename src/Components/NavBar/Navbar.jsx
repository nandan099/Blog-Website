import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <h2 className="logo">Blogs<span>.</span></h2>

        {/* Hamburger */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* SINGLE NAV */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/login" className="nav-item">
            Login
          </NavLink>
          <NavLink to="/registration" className="nav-item">
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
