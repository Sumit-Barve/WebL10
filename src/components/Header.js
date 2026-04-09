import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyBrand</div>
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;