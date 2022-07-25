import React, { useState } from "react";
import logo from "../images/baqirex.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>

      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">UI ss</a>
        </li>
        <li>
          <a href="#">Download</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
