import React, { useState, useEffect } from 'react';
import headshot from '../assets/headshot.jpg';

function Intro() {
  const [borderColor, setBorderColor] = useState('#007bff');

  useEffect(() => {
    const interval = setInterval(() => {
      const hue = (new Date().getSeconds() * 6) % 360;
      setBorderColor(`hsl(${hue}, 100%, 50%)`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-container">
      <img
        src={headshot}
        alt="Mable Zhang"
        className="intro-headshot"
        style={{ borderColor: borderColor }}
      />
      <p className="intro-text">
        Welcome to my personal website! Browse to learn more.
      </p>
    </div>
  );
}

export default Intro;
