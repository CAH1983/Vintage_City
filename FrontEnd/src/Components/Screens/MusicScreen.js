import React, { useEffect } from 'react';
import MusicComponent from './MusicComponent';
import musicData from '../../DataFrontEnd/MusicData';

function MusicScreen() {
  return (
    <div className='MusicScreen'>
      <section id='music-section1'>
        <div className='container'>
          <h1>MUSIC SCREEN</h1>
          <p>this is the music section!!</p>

          <ul className='music-list'>
            {musicData.map(music => (
              <li key={music._id}>
                <MusicComponent musicURL={music.url} artist={music.artist} song={music.song} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default MusicScreen;
