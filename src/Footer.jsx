import React from "react";
import arrowIcon from "./combined-shape.svg";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #111111;
  color: #a9afb6;
  font-family: "Fira Sans";
`;

const Heading = styled.h4`
  margin: 0;
  margin-bottom: 0.9rem;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5;
  color: #646971;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
`;

const Navigation = styled.nav`
  padding-top: 1rem;
  border-top: solid 2px #3e4247;
`;

const TextLast = styled.p`
  margin-top: 1.2rem;
  font-family: "Fira Sans";
  font-size: 0.875rem;
  font-weight: 300;
  color: #a9afb6;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
`;

const LinkLast = styled(Link)`
  margin-top: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #ffffff;
  text-decoration: none;
`;

const NavArrow = styled.img`margin-left: .5rem;`;

const Copyright = styled.p`
  padding-top: 3.5rem;
  font-size: 0.6875rem;
  font-weight: 300;
  line-height: 1.6;
  color: #a9afb6;
  margin-top: 1rem;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col xs={4}>
            <Heading>ООО «Ярд»</Heading>
            <Text>ОГРН 1175074002531</Text>
            <Text>ИНН 5036165365</Text>
            <TextLast>+7 (999) 821-14-88</TextLast>
          </Col>
          <Col xs={2}>
            <Navigation>
              <Heading>Жилые комплексы</Heading>
              <NavLink to="/">ВТБ Арена Парк</NavLink>
              <NavLink to="/">Садовые кварталы</NavLink>
              <NavLink to="/">Резиденция Монэ</NavLink>
              <LinkLast to="/">
                Все ЖК Москвы <NavArrow src={arrowIcon} />
              </LinkLast>
            </Navigation>
          </Col>
          <Navigation>
            <Heading>Компания</Heading>
            <NavLink to="/">Команда</NavLink>
            <NavLink to="/">О компании</NavLink>
          </Navigation>
          <Col xs={2} />
        </Row>
        <Row>
          <Col xs={8} xsOffset={4}>
            <Copyright>
              Любая информация, представленная на данном сайте, носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
              РФ. © ООО «Ярд», 2017
            </Copyright>
          </Col>
        </Row>
      </Grid>
    </Footer>
  );
};