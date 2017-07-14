import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';

const Heading = styled.h1`
  margin-bottom: 0;
  margin-top: 25px;
  font-family: "Philosopher", sans-serif;
  font-weight: bold;
  color: #3e4247;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.57;
  color: #a9afb6;
`;

const Button = styled.button`
  align-self: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 0.625rem;
  margin-top: 1.5rem;
  font-weight: 300;
  line-height: 1;
  color: #00779a;
  background-color: #ffffff;
  border: solid 1px #e0e0e1;
  border-radius: 2px;
  cursor: pointer;
`;
const Address = styled.div``;

export default (props) =>
  (<Grid>
    <Row between="xs">
      <Address>
        <Heading>{props.name}</Heading>
        <Text>{props.address}</Text>
      </Address>
      <Button>В избранное</Button>
    </Row>
  </Grid>);
