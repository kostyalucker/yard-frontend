import React from 'react';
import guideImage from '../../img/polyanka-photo.png';
import guideMap from '../../img/map.png';
import GuideCard from './GuideCard';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <section className="Jakimanka">
      <div className="complex-guide">
        <Grid>
          <Row>
            <Col xs={6}>
              <h2 className="complex-guide-title">Якиманка</h2>
              <h3 className="complex-guide-subheading">Исторический центр Москвы в двух <br /> километрах от Кремля</h3>
              <a href="/" className="complex-guide-link">Гид по Якиманке →</a>
            </Col>
            <Col xs={6}>
              <img src={guideImage} alt="1" className="complex-guide-img" />
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
                  <img src={guideMap}alt="Map" className="complex-map-img"/>
                </div>
              </Col>
              <Col xs={6}>
                <div className="complex-address-points">
                  <GuideCard
                    title="Красный Октябрь"
                    text="24 минуты, 6 км"
                  />  
                  <GuideCard
                    title="World class"
                    text="2 минуты, 300 м"
                  /> 
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
    </section>
  );
};