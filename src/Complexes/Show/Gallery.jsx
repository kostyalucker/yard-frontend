import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  overflow-x: auto;
`;

const imagesPath = 'https://yard-images.s3.amazonaws.com/';

const Image = styled.img`height: 400px;`;
export default function (props) {
  return (
    <div>
      <Gallery>
        {props.images.map(img =>
          (<Image
            key={img.id}
            src={`${imagesPath}${img.id}-512`}
            alt="Галерея"
          />),
        )}
      </Gallery>
    </div>
  );
}
