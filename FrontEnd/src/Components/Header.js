import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <header className='Header'>
      <div className='inline-flex container'>
        <div className='logo-wrapper'>
          <Link to='/'>
            <img className='logo-header' src='Images/vintage-city-logo-white.svg' alt='VC logo' />
          </Link>
        </div>

        <div className='inline-flex header-links'>
          <Link to='/Music'>Music</Link>
          <Link to='/TVshows'>TV Shows</Link>
          <Link to='/Collectors'>Collectors</Link>
          <Link to='/Clothing'>Clothing</Link>

          <button id='login-btn'>Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
