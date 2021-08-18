import React from 'react';
import PropTypes from 'prop-types';

function MusicComponent({ musicURL }) {
  return (
    <div>
      <div className='video-responsive'>
        <h1>Music component</h1>
        <iframe
          width='853'
          height='480'
          src={musicURL}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  );
}

export default MusicComponent;
