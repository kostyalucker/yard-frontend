import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: auto;
`;

const imagesPath = 'https://yard-images.s3.amazonaws.com/';

const Image = styled.img`height: 400px;`;
export default function (props) {
  if (props.complex.images) {
    return (
      <div>
        <Gallery>
          {props.complex.images.map(img => <Image src={`${imagesPath}${img.id}-512`} />)}
        </Gallery>
      </div>
    );
  }
  return (<div />);
}
