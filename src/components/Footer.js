import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../css/Button.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive out best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h3>Get to Know Us</h3>
            <Link to="/sign-up">Careers</Link>
            <Link to="/">Amazon and Our Planet</Link>
            <Link to="/">Investor Relations</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Press Releases</Link>
          </div>
          <div class="footer-link-items">
            <h3>Make Money with Us</h3>
            <Link to="/">Sell on Amazon</Link>
            <Link to="/">Sell Under Amazon Accelerator</Link>
            <Link to="/">Amazon Associates</Link>
            <Link to="/">Sell on Amazon Handmade</Link>
            <Link to="/">Advertise Your Products</Link>
            <Link to="/">Independently Publish with Us</Link>
            <Link to="/">Host an Amazon Hub</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h3>Amazon Payment Products</h3>
            <Link to="/">Shop with Points</Link>
            <Link to="/">Reload Your Balance</Link>
            <Link to="/">Amazon Currency Converter</Link>
            <Link to="/">Gift Cards</Link>
            <Link to="/">Amazon Cash</Link>
          </div>
          <div class="footer-link-items">
            <h3>Let Us Help You</h3>
            <Link to="/">COVID-19 and Amazon</Link>
            <Link to="/">Shipping Rates & Policies</Link>
            <Link to="/">Amazon Prime</Link>
            <Link to="/">Returns Are Easy</Link>
            <Link to="/">Manage your Content and Devices</Link>
            <Link to="/">Customer Service</Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
