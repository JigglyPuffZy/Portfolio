import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo"></div>
      <div className="ralph-text">Ralph</div>

      <button className="hamburger" onClick={toggleDrawer}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/hero" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "")} onClick={() => setIsOpen(false)}>
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
