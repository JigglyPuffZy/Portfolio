import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"></div>
      <div className="ralph-text">Ralph</div>
      <ul className="nav-menu">
        <li>
          <NavLink 
            to="/hero" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/service" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacts" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
