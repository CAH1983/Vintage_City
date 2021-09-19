import React from 'react';
import Hero from './Hero';
import Suggestions from './Suggestions';

function HomeGuest() {
  return (
    <div className='HomeGuest'>
      <Hero />
      {console.log('home guest')}
      <Suggestions />
    </div>
  );
}

export default HomeGuest;
