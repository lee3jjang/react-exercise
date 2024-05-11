import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );

  function handleClick() {
    setMenuOpen((menuOpen) => !menuOpen);
  }
};
