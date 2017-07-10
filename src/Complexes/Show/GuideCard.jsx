import React from "react";
import styled from "styled-components";

const Place = styled.div`
  padding: 1.5rem;
  padding-bottom: 1.57rem;
  border-bottom: solid 1px #e0e0e1;

  &:last-child {
    margin-bottom: 0;
    border: 0;
  }
`;

const Address = styled.h6`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
  font-family: Fira Sans;
  font-weight: 500;
`;

const Distance = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
  font-family: Fira Sans;
`;

export default props => {
  return (
    <Place>
      <Address>
        {props.address}
      </Address>
      <Distance>
        {props.distance}
      </Distance>
    </Place>
  );
};
