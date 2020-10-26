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
                        <input type="email" name="email" placeholder="email@dot.com" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
                <section className="social-media">
                    <div className="social-media-wrapper">
                        <div className="footer-logo">
                            <Link className="social-logo" to="/">Chef awesome logo<i /></Link>
                        </div>
                        <small className="website-rights">&copy;{new Date().getFullYear()} CHEF AWESOME | All rights reserved</small>
                        <div className="social-icons">
                            <Link className="social-icons-link linkedin" to="/" target="_blank" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"/>
                            </Link>
                        </div>
                    </div>
                </section>
            
        </div>
    )
}

export default Footer
