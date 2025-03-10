import React from 'react';
import '../css/Navbar.css'; // CSS 경로 수정

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>MyApp</h2>
        </div>
        <div className="navbar-links">
          <button className="btn">Login</button>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
