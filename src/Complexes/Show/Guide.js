import React from "react";
import GuideCard from "./GuideCard";
import styled from "styled-components";
import { Grid, Row, Col } from "react-flexbox-grid";

const Guide = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.625rem;
  margin-bottom: 13.5rem;
  background-color: #3e4247;
  color: #ffffff;
`;

const Heading = styled.h5`
  margin: 0;
  margin-top: 7.5rem;
  margin-bottom: 3rem;
  font-family: "Philosopher", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Description = styled.h2`
  margin: 0;
  margin-bottom: 3.2rem;
  font-family: "Philosopher", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.25;
  color: #ffffff;
`;

const Link = styled.a`
  font-size: 1rem;
  color: #00779a;
  font-family: 'Fira Sans', sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

const Cards = styled.div`
  position: absolute;
  width: 36rem;
  padding-left: 1rem;
  margin-top: 4rem;
  background-color: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const MapImg = styled.img`
  width: 591px;
  height: 306px;
  position: absolute;
  margin-top: 4rem;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
`;

const FieldImg = styled.img`
  width: 592px;
  height: 568px;
`;

export default () => {
  return (
<<<<<<< HEAD
    <Guide>
      <Grid>
        <Row>
          <Col xs={6}>
            <Heading>Якиманка</Heading>
            <Description>
              Исторический центр Москвы в двух<br /> километрах от Кремля
            </Description>
            <Link to="/">Гид по Якиманке →</Link>
          </Col>
          <Col xs={6}>
            <FieldImg
              src={process.env.PUBLIC_URL + "./img/polyanka-photo.png"}
              alt="Полянка"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <MapImg
              src={process.env.PUBLIC_URL + "./img/map.png"}
              alt="Карта"
            />
          </Col>
          <Col xs={6}>
            <Cards>
              <GuideCard address="Красный Октябрь" distance="24 минуты, 6 км" />
              <GuideCard address="World class" distance="2 минуты, 300 м" />
              <GuideCard address="Третьяковская галерея"distance="14 минут, 4 км" />
            </Cards>
          </Col>
        </Row>
      </Grid>
    </Guide>
=======
    <div>
      <div className="complex-guide">
        <Grid>
          <Row>
            <Col xs={6}>
              <h2 className="complex-guide-title">Якиманка</h2>
              <h3 className="complex-guide-subheading">
                Исторический центр Москвы в двух <br /> километрах от Кремля
              </h3>
              <a href="/" className="complex-guide-link">
                Гид по Якиманке →
              </a>
            </Col>
            <Col xs={6}>
              <img
                src={process.env.PUBLIC_URL + "./img/polyanka-photo.png"}
                alt="1"
                className="complex-guide-img"
              />
            </Col>
          </Row>
        </Grid>
      </div>
      <div className="complex-address">
        <Grid>
          <div className="complex-map">
            <Row>
              <Col xs={6}>
                <div className="complex-address-map">
                  <img
                    src={process.env.PUBLIC_URL + "./img/map.png"}
                    alt="Map"
                    className="complex-map-img"
                  />
                </div>
              </Col>
              <Col xs={6}>
                <div className="complex-address-points">
                  <GuideCard title="Красный Октябрь" text="24 минуты, 6 км" />
                  <GuideCard title="World class" text="2 минуты, 300 м" />
                  <GuideCard
                    title="Третьяковская галерея"
                    text="14 минут, 4 км"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    </div>
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
  );
};
