import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header-wrapper'>
      <div className='inline-flex container'>
        <div className='logo-wrapper'>
          <Link to='/'>
            <img className='logo-header' src='Images/VC-Logo.png' alt='VC logo' />
          </Link>
        </div>

        <div className='inline-flex header-links-wrapper'>
          <Link to='/Music'>Music</Link>
          <Link to='/TVshows'>TV Shows</Link>
          <Link to='/Collectors'>Collectors</Link>
          <Link to='/Clothing'>Clothing</Link>
          <button id='login-btn' className='btn basic-btn'>
            Sign Up / Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
