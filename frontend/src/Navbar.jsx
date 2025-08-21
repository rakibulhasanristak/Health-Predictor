import React from 'react';

function Navbar({ setActivePage }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        Health Predictor
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => setActivePage('home')}>Predictor</a></li>
        <li><a href="#info" onClick={() => setActivePage('info')}>Information</a></li>
        <li><a href="#stats" onClick={() => setActivePage('stats')}>Statistics</a></li>
        <li><a href="#contact" onClick={() => setActivePage('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
