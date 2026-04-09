import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Build Modern Digital Experiences</h1>
        <p>
          We create elegant, responsive, and user-friendly websites using React.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn primary-btn">Explore Services</a>
          <a href="#contact" className="btn secondary-btn">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;