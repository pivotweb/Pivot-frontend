import React, { useState } from 'react';
import './Footer.css'; // Sytlings for Footer component
// import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '/images/logo2.jpeg'

const Footer = () => {
  const [email, setEmail] = useState('');

const handleSubscribe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
};

  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-context">
        <div className="sctt1">
          <div className="footing">
            
            {/* Left Section - Newsletter */}
            <div className="Newsletter">
              <div className="Newsletter-header">
                <img src={Logo} alt="Logo"/>
              </div>
              
              <div className="Deyah">
                <h3 className="Deyah-heading">
                  Join our Newsletter to stay updated
                </h3>
                
                <div className="Email-div">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="Input-email"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="Subscribe-button"
                  >
                    Subscribe
                  </button>
                </div>
                
                <p className="Subscribe-text">
                  By subscribing you agree to our{' '}Privacy Policy
                  {' '}and provide <br /> consent to receive updates from our company.
                </p>
              </div>
            </div>

            {/* Right Section - Links and Social */}
            <aside className="Social-section">
              
              {/* Quick Links */}
              <div>
                <h4 className="Quick-text">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="De-links">Home</a></li>
                  <li><a href="#" className="De-links">About</a></li>
                  <li><a href="#" className="De-links">2025 Edition</a></li>
                  <li><a href="#" className="De-links">2024 Recap</a></li>
                  <li><a href="#" className="De-links">Get Involved</a></li>
                  <li><a href="#" className="De-links">Gallery</a></li>
                  <li><a href="#" className="De-links">Contact</a></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="follow-heading">Follow us</h4>
                <div className="footer-sct2">
                  <a 
                    href="https://www.facebook.com/share/16XPgu5zXL/" 
                    className="sos-icons"
                    aria-label="Facebook"
                  >
                     <FaFacebook size={25} />
                  </a>
                  <a 
                    href="https://www.instagram.com/thepivotng?igsh=cWo3Z3N5bW9qZ3cx" 
                    className="sos-icons"
                    aria-label="Instagram"
                  >
                    <IoLogoInstagram  size={25} />
                  </a>
                  <a 
                    href="https://x.com/ThePivotNG?t=a1g56a7FCmtJr09y847sLQ&s=09" 
                    className="sos-icons"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter size={25} />
                  </a>
                  <a 
                    href="https://m.youtube.com/@ThePivotNg?fbclid=PAQ0xDSwLHxNBleHRuA2FlbQIxMAABp_bFR-nm8h2ZB9Df4ocEiEi0KcgMWyH988k1j0VUUvXoqaBlGLi_cTR5lOOr_aem_ES2dokl0v2Gr-oSFvZxNWA" 
                    className="sos-icons"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={25} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="Bottom-footer">
        <div className="Bottom-footer-context">
          <div className="power-text">
            <span>Powered by The Pivot Africa</span>
          </div>
          
          <div className="wrap">
            <a href="#" className="wrap-link">Data protection</a>
            <a href="#" className="wrap-link">Privacy policy</a>
            <a href="#" className="wrap-link">Terms of service</a>
            <a href="#" className="wrap-link">Release and content Declaration</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;