import React from 'react';
import './footer.css'; // Import the custom CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>
            Address: 123 Printing Street, Cityville, State, ZIP Code
            <br />
            Phone: (123) 456-7890
            <br />
            Email: info@yourcompany.com
          </p>
        </div>
        <div className="footer-content">
          <h3>Links</h3>
          <ul className="footer-links">
            <li>
              <a className='aLink' href="/">Home</a>
            </li>
            <li>
              <a className='aLink' href="/services">Services</a>
            </li>
            <li>
              <a className='aLink' href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a className='aLink' href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
