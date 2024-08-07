import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="subscribe">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Sign up for updates from mettā muse.</p>
            <form onSubmit={handleSubscribe}>
              <div className="search_btn">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="contact">
            <h3>CONTACT US</h3>
            <p>Email: contact@myapp.com</p>
            <p>Phone: +123 456 7890</p>
            <h3>CURRENCY</h3>
            <p>USD</p>
            <p style={{ fontSize: "8px" }}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        <div className="footer-content"></div>
      </footer>
      <footers className="footer_2">
        <div className="footer-contents">
          <div className="meta">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <h5>EU Compliances Docs</h5>
            </ul>
          </div>
          <div className="meta">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <h5>EU Compliances Docs</h5>
            </ul>
          </div>
          <div className="meta">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <h3>mettā muse Accepts</h3>
            <ul className="listItem">
              <li>
                <i className="fa-brands fa-google-pay"></i>
              </li>
              <li>
                <i className="fa-brands fa-paypal"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-mastercard"></i>
              </li>
              <li>
                <i className="fa-brands fa-cc-apple-pay"></i>
              </li>
            </ul>
          </div>
        </div>
      </footers>
    </>
  );
};

export default Footer;
