import React from "react";
import OffersCard from "./OffersCard";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Offers = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: #f4f5f9;
`;

const Heading = styled.h3`
  margin: 0;
  margin-bottom: 1.5rem;
  font-family: Philosopher, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
  text-align: center;
`;

export default () => {
  return (
    <Offers>
      <Grid>
        <Heading>Предложения в ЖК «Полянка/44»</Heading>
        <Row>
          <Col xs={4}>
            <OffersCard
              rooms="1"
              size={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
          </Col>
          <Col xs={4}>
            <OffersCard
              rooms="2"
              size={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
          </Col>
          <Col xs={4}>
            <OffersCard
              rooms="3"
              size={{ min: 59, max: 120 }}
              price={{ min: 20.3, max: 84.2 }}
            />
          </Col>
        </Row>
      </Grid>
    </Offers>
  );
};
