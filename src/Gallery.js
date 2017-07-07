import React from 'react';
import photo1 from './img/bitmap0.png';
import photo2 from './img/bitmap2.png';
import photo3 from './img/bitmap3.png';
import photo4 from './img/bitmap4.png';
import photo5 from './img/bitmap5.png';

export default () => {
  return (
    <section class="complex-hero">
      <div class="complex-hero-wrap">
        <img class="hero-image" src={photo1} alt="photo" />
        <img class="hero-image" src={photo2} alt="photo" />
        <img class="hero-image" src={photo3} alt="photo" />
        <img class="hero-image" src={photo4} alt="photo" />
        <img class="hero-image" src={photo5} alt="photo" />
      </div>
      <div class="hero-button-wrap">
        <button class="hero-button" name="button">41 фотография</button>
      </div>
    </section>
  );
};