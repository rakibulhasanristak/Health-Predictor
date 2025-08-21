import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page glass-container">
      <h1 className="form-title">Contact & Information</h1>
      
      <div className="contact-section">
        <h2>Developed By</h2>
        <p>This application was developed by [Your Name/Your Team's Name] as a project to demonstrate the integration of machine learning with modern web technologies.</p>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>For any inquiries, feedback, or collaboration opportunities, please reach out via email:</p>
        <a href="mailto:contact@example.com" className="contact-email">contact@example.com</a>
      </div>
    </div>
  );
}

export default ContactPage;
