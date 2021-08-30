import React from 'react';
import { Grid } from '@material-ui/core';

function Hero() {
  return (
    <>
      <section className='Hero'>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item xs={5}>
            {' '}
            <div>
              <h1>A Blast from the Past</h1>
              <p>Share your music, videos and and childhood treasures from the 80's, 90's, 2000's </p>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div>
              <img className='hero-img' src='Images/retro-hero.jpg' alt="80's geo background" />
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  );
}

export default Hero;
