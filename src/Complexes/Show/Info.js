import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const Info = styled.section`
  display: flex;
  border-bottom: solid 1px #e0e0e1;
  padding-top: 2.5rem;
  padding-bottom: 1.6rem;
  padding-left: .5rem;
`;

const Item = styled.div`margin-right: 3rem;`;

const Title = styled.h2`
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

export default () => {
  return (
    <Grid>
      <Info>
        <Item>
          <Title>
            950<Subheading>предложений</Subheading>
          </Title>
        </Item>
        <Item>
          <Title>
            John McAslan + Partners<Subheading>архитектор</Subheading>
          </Title>
        </Item>
        <Item>
          <Title>
            Группа «ПСН»<Subheading>застройщик</Subheading>
          </Title>
        </Item>
      </Info>
    </Grid>
  );
};
