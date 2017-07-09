import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  display: flex;
  margin-bottom: 3rem;
  background-color: #ffffff;
  text-decoration: none;

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

const Details = styled.article`
border-bottom: 2px solid #646971;
`;

const Location = styled.p`
  font-family: Monaco, Menlo, Consolas, monospace;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #646971;
  margin: 1.5rem 0 1.5rem 2rem;
`;

const Address = styled.h3`
  margin-top: 0;
  margin-bottom: 0rem;
  margin-left: 2rem;
  text-transform: capitalize;
  font-family: "Fira Sans";
  font-size: 2.5rem;
  font-weight: bold;
  color: #000000;
  line-height: 1.4;
`;

const Description = styled.p`
  margin-left: 2rem;
  margin-right: 5.375rem;
  color: #3e4247;
  font-family: "Fira Sans";
  line-height: 1.5;
`;

export default props =>
  <Card to="/complex">
    <Image src={props.src} />
    <Details>
      <Location>
        {props.location}
      </Location>
      <Address>
        {props.address}
      </Address>
      <Description>
        {props.children}
      </Description>
    </Details>
  </Card>;
