import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import pluralize from 'pluralize-ru';

const Info = styled.section`
  display: flex;
  border-bottom: solid 1px #e0e0e1;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  padding-left: .5rem;
`;

const Btn = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  margin-top: -2.5rem;
  margin-left: .5rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 10px;
  font-weight: 300;
  line-height: 1.0;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  background-color: #00779a;
`;

const Item = styled.div`margin-right: 3rem;`;

const Heading = styled.h2`
  font-family: Philosopher;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #3e4247;
  margin: 0;
`;

const Subheading = styled.small`
  display: block;
  margin-top: .5rem;
  font-family: Fira Sans;
  font-size: .875rem;
  font-weight: 300;
  line-height: 1.57;
  text-align: left;
  color: #a9afb6;
`;

export default function (props) {
  const length = props.images.length;
  const countPhoto = pluralize(length, '%d фотографий', '%d фотография', '%d фотографии', '%d фотографий');
  return (
    <Grid>
      <Btn>{countPhoto}</Btn>
      <Info>
        <Item>
          <Heading>
            {props.count}
            <Subheading>предложений</Subheading>
          </Heading>
        </Item>
        <Item>
          <Heading>
            {props.architect}
            <Subheading>архитектор</Subheading>
          </Heading>
        </Item>
      </Info>
    </Grid>
  );
}
