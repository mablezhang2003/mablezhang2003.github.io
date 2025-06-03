import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>
                <FaEnvelope /> mablezhang2003@berkeley.edu
            </p>
            <div className="social-links">
                <a href="https://github.com/mablezhang2003" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/mablezhang/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </section>
    );
}

export default Contact;
