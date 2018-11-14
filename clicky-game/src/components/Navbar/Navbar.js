import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navigation navbar-light shadow-lg p-3 mb-5">
  <a className="navbar-brand text-white" href="/">Clicky Game</a>
  <span className="navbar-text text-white mx-auto">
    Click an image to begin!
  </span>
</nav>
);

export default Navbar;
