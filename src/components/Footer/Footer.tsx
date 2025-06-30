import React, { useState } from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '/images/logo2.jpeg';

// Scroll positions for each section
const SCROLL_POS: Record<string, number> = {
  Home: 0,
  About: 1.33,
  "2025 Edition": 2.98,
  "2024 Recap": 4.68,
  "Get Involved": 6.4,
  Gallery: 7,
  Contact: 9.67,
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribeToNewsletter = async (email: string) => {
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      return response.ok;
    } catch (error) {
      console.error('Subscription error:', error);
      return false;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !isValidEmail(email)) return;

    setIsLoading(true);
    const success = await subscribeToNewsletter(email);

    if (success) {
      setSuccessMessage('You’ve successfully subscribed to our newsletter! Thank you!');
    } else {
      setSuccessMessage('Oops! Something went wrong. Please try again.');
    }

    setEmail('');
    setIsLoading(false);

    // Auto-clear message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const scrollToSection = (label: string) => {
    const multiplier = SCROLL_POS[label];
    const y = window.innerHeight * multiplier;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-context">
        <div className="sctt1">
          <div className="footing">
            {/* LEFT: Newsletter */}
            <div className="Newsletter">
              <div className="Newsletter-header">
                <img src={Logo} alt="Logo" />
              </div>

              <div className="Deyah">
                <h3 className="Deyah-heading">Join our Newsletter to stay updated</h3>
                <form onSubmit={handleSubscribe} className="Email-div">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="Input-email"
                    disabled={isLoading}
                    required
                    aria-label="Email address for newsletter subscription"
                  />
                  <button
                    type="submit"
                    className="Subscribe-button"
                    disabled={isLoading || !email.trim()}
                    aria-label={isLoading ? 'Subscribing to newsletter' : 'Subscribe to newsletter'}
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>

                {/* ✅ Success Message Display */}
                {successMessage && (
                  <p className="success-message" style={{ marginTop: '1rem', color: 'green' }}>
                    {successMessage}
                  </p>
                )}

                <p className="Subscribe-text">
                  By subscribing you agree to our Privacy Policy
                  and provide <br /> consent to receive updates from our company.
                </p>
              </div>
            </div>

            {/* RIGHT: Quick Links */}
            <aside className="Social-section">
              <div>
                <h4 className="Quick-text">Quick Links</h4>
                <ul className="space-y-2">
                  {Object.keys(SCROLL_POS).map((label) => (
                    <li key={label}>
                      <button
                        onClick={() => scrollToSection(label)}
                        className="De-links"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Icons */}
              <div>
                <h4 className="follow-heading">Follow us</h4>
                <div className="footer-sct2">
                  <a href="https://www.facebook.com/share/16XPgu5zXL/" className="sos-icons" aria-label="Facebook">
                    <FaFacebook size={25} />
                  </a>
                  <a href="https://www.instagram.com/thepivotng?igsh=cWo3Z3N5bW9qZ3cx" className="sos-icons" aria-label="Instagram">
                    <IoLogoInstagram size={25} />
                  </a>
                  <a href="https://x.com/ThePivotNG?t=a1g56a7FCmtJr09y847sLQ&s=09" className="sos-icons" aria-label="X (Twitter)">
                    <FaXTwitter size={25} />
                  </a>
                  <a href="https://m.youtube.com/@ThePivotNg" className="sos-icons" aria-label="YouTube">
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