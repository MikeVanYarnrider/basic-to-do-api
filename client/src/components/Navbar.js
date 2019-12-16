import React from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Tasks</Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/Signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
