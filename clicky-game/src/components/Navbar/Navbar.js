import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navigation navbar-light shadow-lg p-3 mb-5">
  <a className="navbar-brand text-white" href="/">Clicky Game</a>
  <p>{props.message}</p>
  <p> Score: {props.score} | Top Score: {props.topScore}</p>
</nav>
);

export default Navbar;
