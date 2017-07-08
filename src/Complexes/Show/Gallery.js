import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
=======
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316

const Gallery = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const Button = styled.button`
  position: absolute;
  bottom: 1.1rem;
  left: 4.7rem;
  border-radius: 2px;
  background-color: #00779a;
  border: none;
  outline: none;
  color: #fff;
  font-family: Fira Sans;
  font-size: .6rem;
  font-weight: 300;
  line-height: 1;
  text-align: left;
  padding: .5rem 1rem;
`;

const ButtonWrap = styled.div`position: relative;`;

const Image = styled.img`height: 400px;`;
export default () => {
  return (
<<<<<<< HEAD
    <div>
      <Gallery>
        <Image src={process.env.PUBLIC_URL + "./img/bitmap1.png"} />
        <Image src={process.env.PUBLIC_URL + "./img/bitmap2.png"} />
        <Image src={process.env.PUBLIC_URL + "./img/bitmap3.png"} />
        <Image src={process.env.PUBLIC_URL + "./img/bitmap4.png"} />
        <Image src={process.env.PUBLIC_URL + "./img/bitmap5.png"} />
      </Gallery>
      <ButtonWrap>
        <Button>41 фотография</Button>
      </ButtonWrap>
    </div>
=======
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
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
  );
};
