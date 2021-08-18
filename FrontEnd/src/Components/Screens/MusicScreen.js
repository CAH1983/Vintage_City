import React, { useEffect } from 'react';
import MusicComponent from './MusicComponent';

function MusicScreen() {
  return (
    <div className='wrapper'>
      <section id='music-section1'>
        <div className='container'>
          <h1>MUSIC SCREEN</h1>
          <p>this is the music section!!</p>
          <MusicComponent musicURL='https://www.youtube.com/watch?v=aGSKrC7dGcY' />
        </div>
      </section>
    </div>
  );
}

export default MusicScreen;
