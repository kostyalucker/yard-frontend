import React from 'react';
import photo1 from '../../img/bitmap1.png';
import photo2 from '../../img/bitmap2.png';
import photo3 from '../../img/bitmap3.png';
import photo4 from '../../img/bitmap4.png';
import photo5 from '../../img/bitmap5.png';

export default () => {
  return (
    <section className="complex-hero">
      <div className="complex-hero-wrap">
        <img className="hero-image" src={photo1} alt="1"/>
        <img className="hero-image" src={photo2} alt="2" />
        <img className="hero-image" src={photo3} alt="3" />
        <img className="hero-image" src={photo4} alt="4" />
        <img className="hero-image" src={photo5} alt="4" />
      </div>
      <div className="hero-button-wrap">
        <button className="hero-button" name="button">41 фотография</button>
      </div>
    </section>
  );
};