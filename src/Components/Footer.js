import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">Join the cooking community</p>
                <p className="footer-subscription-text">Unsub</p>
                <div className="input-area">
                    <form>
                        <input type="email" name="email" placeholder="email@dot.com" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Chef awesome</h2>
                        <Link to="/services">What I am up to</Link>
                        <Link to="/services">Testimonials</Link>
                        <Link to="/services">Terms of services</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Contact chef awesome</h2>
                        <Link to="/services">Contact</Link>
                        <Link to="/services">Support</Link>
                        <Link to="/services">Events</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>?????</h2>
                        <Link to="/services">????</Link>
                        <Link to="/services">????</Link>
                        <Link to="/services">????</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to="/services">Instagram</Link>
                        <Link to="/services">Facebook</Link>
                        <Link to="/services">Twitter</Link>
                        <Link to="/services">Line</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link className="social-logo" to="/">@<i /></Link>
                    </div>
                    <small className="website-rights">&copy;{new Date().getFullYear()} CHEF AWESOME | All rights reserved</small>
                    <div className="social-icons">
                        <Link className="social-icons-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social-icons-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social-icons-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link className="social-icons-link line" to="/" target="_blank" aria-label="Line">
                            <i className="fab fa-line" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
