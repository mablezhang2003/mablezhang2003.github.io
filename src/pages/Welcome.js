import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div style={container}>
      <h1 style={heading}>Welcome to Mable Zhang's Portfolio</h1>
      <p style={subtext}>
        I'm a data-driven thinker with a passion for solving real-world problems using technology and economics.
      </p>

      <div style={buttonGroup}>
        <Link to="/about" style={button}>About</Link>
        <Link to="/projects" style={button}>Projects</Link>
        <Link to="/contact" style={button}>Contact</Link>
      </div>
    </div>
  );
};

const container = {
  padding: "3rem",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto",
};

const heading = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const subtext = {
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#555",
};

const buttonGroup = {
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
};

const button = {
  padding: "0.75rem 1.5rem",
  fontSize: "1rem",
  backgroundColor: "#1f2937", // dark slate
  color: "#fff",
  textDecoration: "none",
  borderRadius: "6px",
  transition: "background-color 0.3s",
};

export default Welcome;
