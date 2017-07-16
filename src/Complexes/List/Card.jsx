import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const imagesPath = 'https://yard-images.s3.amazonaws.com/';

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;
  background-color: #ffffff;
  text-decoration: none;
  border-bottom: 2px solid #646971;

  &:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
  }

  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Image = styled.img`
  width: 484px;
  height: 350px;
  flex-shrink: 0;
`;

const Details = styled.article``;

const Location = styled.p`
  font-family: Monaco, Menlo, Consolas, monospace;
  font-size: 1rem;
  text-transform: uppercase;
  color: #646971;
  margin: 1.5rem 0 1.5rem 2rem;
`;

const Address = styled.h3`
  margin-top: 0;
  margin-bottom: 0rem;
  margin-left: 2rem;
  text-transform: capitalize;
  font-family: 'Fira Sans';
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  line-height: 1.4;
`;

const Description = styled.p`
  margin-left: 2rem;
  margin-right: 5.375rem;
  color: #3e4247;
  font-family: 'Fira Sans';
  line-height: 1.5;
`;

export default function (props) {
  return (
    <Card to={`complex/${props.complex.id}`}>
      <Image src={`${imagesPath}${props.complex.image.id}-512`} alt="preview" />
      <Details>
        <Location>
          {props.complex.location.subLocalityName},
           {props.complex.location.street},
           {props.complex.location.house}
        </Location>
        <Address>
          {props.complex.name}
        </Address>
        <Description />
      </Details>
    </Card>
  );
}
