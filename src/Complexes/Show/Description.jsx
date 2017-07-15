import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Description = styled.section`
  padding-top: 2rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  margin: 0;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Text = styled.p`
  font-family: 'Fira Sans';
  font-size: 1rem;
  line-height: 1.56;
  text-align: left;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const TextLast = styled.p`
  margin-top: 0rem;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.56;
  color: #3e4247;
`;
export default function (props) {
  if (props.children) {
    return (
      <Description>
        <Grid>
          <Row>
            <Col xs={2}>
              <Heading>{props.children}</Heading>
            </Col>
            <Col xs={10}>
              <Text>
                {props.children}
              </Text>
              <Text>
                {props.children}
              </Text>
              <Text>
                {props.children}
              </Text>
              <TextLast>
                {props.children}
              </TextLast>
            </Col>
          </Row>
        </Grid>
      </Description>
    );
  }
  return null;
}
