import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "10px",
  };

  const iconStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "30px",
    transition: "transform 0.2s ease",
  };

  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <h2>Contact Me</h2>
      <div style={rowStyle}>
        <a href="mailto:mablezhang2003@berkeley.edu" style={iconStyle} title="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/mablezhang2003"
          style={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mablezhang/"
          style={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
