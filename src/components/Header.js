import React, {useState, useEffect} from 'react';
import headshot from '../assets/headshot.jpg'; // Adjust path as needed

function Header() {
    const [borderColor, setBorderColor] = useState('#007bff');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hue = (now.getSeconds() * 6) % 360; // Changes with seconds
            setBorderColor(`hsl(${hue}, 100%, 50%)`);
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
    <header className="header-container">
      <div className="top-left-name">
        <h1>Mable Zhang</h1>
      </div>
      <div className="center-headshot">
        <img
          src={headshot}
          alt="Mable Zhang"
          className="headshot"
          style={{
            borderColor: borderColor,
            transition: 'border-color 0.5s ease',
          }}
        />
      </div>
    </header>
  );
}

export default Header;
