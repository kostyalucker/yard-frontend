import React from "react";
import headerLogo from "./compass-logo.svg";
import { Grid, Row } from "react-flexbox-grid";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: solid 1px #eaebf0;
  background-color: #ffffff;
`;

const Logo = styled.img`height: 1.5rem;`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Fira Sans";
  margin-right: 2rem;
  font-size: 1rem;
  line-height: 1;
  color: #3e4247;
  &:last-child {
    margin-right: 0;
  }
`;

const Navigation = styled.nav`
  text-align: right;
  margin-left: auto;
  margin-right: 1rem;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Row>
          <Logo src={headerLogo} />
          <Navigation>
            <NavLink to="/">Купить</NavLink>
            <NavLink to="/">Снять</NavLink>
            <NavLink to="/">Наши агенты</NavLink>
          </Navigation>
        </Row>
      </Grid>
    </Header>
  );
};