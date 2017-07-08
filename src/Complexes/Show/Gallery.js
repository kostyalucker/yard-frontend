import React from "react";

export default () => {
  return (
    <section className="complex-hero">
      <div className="complex-hero-wrap">
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "./img/bitmap1.png"}
          alt="1"
        />
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "./img/bitmap2.png"}
          alt="2"
        />
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "./img/bitmap3.png"}
          alt="3"
        />
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "./img/bitmap4.png"}
          alt="4"
        />
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "./img/bitmap5.png"}
          alt="4"
        />
      </div>
      <div className="hero-button-wrap">
        <button className="hero-button" name="button">
          41 фотография
        </button>
      </div>
    </section>
  );
};
