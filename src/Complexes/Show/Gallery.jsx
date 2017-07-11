import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const Image = styled.img`height: 400px;`;
export default () =>
  (<div>
    <Gallery>
      <Image src={'./img/bitmap1.png'} />
      <Image src={'./img/bitmap2.png'} />
      <Image src={'./img/bitmap3.png'} />
      <Image src={'./img/bitmap4.png'} />
      <Image src={'./img/bitmap5.png'} />
    </Gallery>
  </div>);
