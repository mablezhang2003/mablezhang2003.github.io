import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // On the home page ("/"), show nothing in the header
  if (location.pathname === '/') return null;

  return (
    <header className="simple-header">
      <Link to="/" className="nav-home-button">
        Home
      </Link>
    </header>
  );
}

export default Header;
