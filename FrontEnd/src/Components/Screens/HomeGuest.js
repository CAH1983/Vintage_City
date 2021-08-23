import React from 'react';
import Hero from './Hero';

function HomeGuest() {
  return (
    <div className='HomeGuest'>
      <section id='home-section1'>
        <div className='container'>
          <Hero />
          <h2>Top items</h2>
        </div>
      </section>
      <section>
        <div className='collection_section layout_padding'>
          <div className='container'>
            <h1 className='new_text'>
              <strong>New Arrivals Products</strong>
            </h1>
            <p className='consectetur_text'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeGuest;
