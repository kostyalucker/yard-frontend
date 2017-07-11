import React from 'react';
import styled from 'styled-components';

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
export default () =>
  (<div>
    <Gallery>
      <Image src={process.env.PUBLIC_URL + './img/bitmap1.png'} />
      <Image src={process.env.PUBLIC_URL + './img/bitmap2.png'} />
      <Image src={process.env.PUBLIC_URL + './img/bitmap3.png'} />
      <Image src={process.env.PUBLIC_URL + './img/bitmap4.png'} />
      <Image src={process.env.PUBLIC_URL + './img/bitmap5.png'} />
    </Gallery>
    <ButtonWrap>
      <Button>41 фотография</Button>
    </ButtonWrap>
  </div>);
