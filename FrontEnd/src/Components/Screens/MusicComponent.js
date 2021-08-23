import React from 'react';

function MusicComponent({ musicURL, artist, song }) {
  return (
    <div>
      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={musicURL}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
        <h3> {song} </h3>
        <p> {artist} </p>
      </div>
    </div>
  );
}

export default MusicComponent;
