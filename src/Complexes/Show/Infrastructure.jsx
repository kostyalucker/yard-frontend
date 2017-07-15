import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Infratructure = styled.div`
  padding-bottom: 3.5rem;
  padding-left: 1rem;
`;

const Heading = styled.h3`
  border-top: solid 1px #eaebf0;
  padding-top: 2.2rem;
  margin-bottom: 1rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Text = styled.p`
  font-family: Fira Sans;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
`;

export default function (props) {
  if (props.amenity) {
    return (
      <Grid>
        <Infratructure>
          <Heading>Инфраструктура</Heading>
          <Row>
            {props.amenties.map(amenity =>
              (<Col xs={2}>
                <Text>
                  {amenity}
                </Text>
              </Col>),
            )};
          </Row>
        </Infratructure>
      </Grid>
    );
  }
  return null;
}
