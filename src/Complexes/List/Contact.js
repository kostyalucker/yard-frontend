import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

/* Для отступов секции */
const Wrap = styled.div`padding: 2.9rem 0rem;`;

const Heading = styled.h2`
  text-transform: capitalize;
  margin-bottom: 0;
  font-weight: bold;
  color: #3e4247;
  font-family: "Fira Sans";
  font-size: 1.55rem;
`;

const Description = styled.p`
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.4;
  text-align: center;
  color: #3e4247;
`;

const Button = styled.button`
  padding: .8rem 2rem;
  text-transform: capitalize;
  border-radius: 2px;
  background-color: #000000;
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default () => {
  return (
    <Wrap>
      <Row center="xs">
        <Col xs={8}>
          <Heading>discover our new developments</Heading>
          <Description>
            Compass brings a modern approach to new development marketing and
            sales. From boutique rental conversions to luxurious ground-up
            condominiums, browse our portfolio of current offerings.
          </Description>
          <Button>Contact The Team</Button>
        </Col>
      </Row>
    </Wrap>
  );
};
