import React from 'react';
import './footer.css'; // Import the custom CSS for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>
            Address: Jagraon, NEVER ASK ME, 142026
            <br />
            Phone: +91 94172 01633
            <br />
            Email: jagjit@gmail.com
          </p>
        </div>
        <br/>
        <div className="footer-content">
          <br/>
          <h3>Links</h3>
          <ul className="footer-links">
            <li>
              <a className='aLink' href="">Home</a>
            </li>
            <li>
              <a className='aLink' href="#features">Features</a>
            </li>
            <li>
              <a className='aLink' href="#pricing">Pricing</a>
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
