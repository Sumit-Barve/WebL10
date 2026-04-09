import React from 'react';

function About() {
  return (
    <section id="about" className="about section">
      <div className="section-title">
        <h2>About Us</h2>
        <p>We design and develop beautiful web solutions for modern needs.</p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Creative Design</h3>
          <p>
            We focus on modern layouts, strong visuals, and clean user interfaces.
          </p>
        </div>
        <div className="about-card">
          <h3>Responsive Layout</h3>
          <p>
            Our websites work smoothly on desktop, tablet, and mobile devices.
          </p>
        </div>
        <div className="about-card">
          <h3>Fast Performance</h3>
          <p>
            We build lightweight and optimized web pages for better performance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;