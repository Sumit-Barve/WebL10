import React from 'react';

function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Responsive and interactive websites for personal, academic, and business use.'
    },
    {
      title: 'UI/UX Design',
      desc: 'Clean, user-friendly, and attractive designs for better user experience.'
    },
    {
      title: 'React Applications',
      desc: 'Single-page applications using reusable components and dynamic rendering.'
    },
    {
      title: 'Maintenance',
      desc: 'Regular updates, improvements, and support for smooth website operation.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>Here are some services we provide to make your website stand out.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-number">0{index + 1}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;