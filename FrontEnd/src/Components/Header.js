import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <Header className='Header'>
      <div className='inline-flex'>
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
    </Header>
  );
}

export default Header;
