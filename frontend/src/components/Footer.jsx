import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showConsent, setShowConsent] = useState(true);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('newsletter_email', email);
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const handleConsentAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowConsent(false);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-title">Microplastics Aware</h3>
              <p className="footer-text">
                Educating the world about the invisible threat of microplastics in our environment, food, and bodies.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/threat">The Threat</Link></li>
                <li><Link to="/health">Health Impacts</Link></li>
                <li><Link to="/environment">Environment</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/resources">Research & News</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-text">Stay updated on the latest research and actions.</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="input-group">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              Made with <Heart size={16} className="heart-icon" /> for our planet | © 2025 Microplastics Aware
            </p>
          </div>
        </div>
      </footer>

      {showConsent && (
        <div className="cookie-consent">
          <div className="consent-content">
            <p>
              We use essential cookies to enhance your browsing experience. By continuing, you agree to our use of cookies.
            </p>
            <button onClick={handleConsentAccept} className="consent-btn">
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
