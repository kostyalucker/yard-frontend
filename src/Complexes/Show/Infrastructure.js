import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-infra">
      <Grid>
        <h2 className="complex-infra-title">Инфраструктура</h2>
        <Row>
          <Col xs={2}>
            <p className="complex-infra-text">Бассейн</p>
            <p className="complex-infra-text">Частная школа</p>
          </Col>
          <Col xs={2}>
            <p className="complex-infra-text">Детский сад</p>
            <p className="complex-infra-text">Частная школа</p>
          </Col>
          <Col xs={2}>
            <p className="complex-infra-text">Частная школа</p>
            <p className="complex-infra-text">Частная школа</p>
          </Col>
          <Col xs={2}>
            <p className="complex-infra-text">Бассейн</p>
          </Col>
          <Col xs={2}>
            <p className="complex-infra-text">Детский сад</p>
          </Col>
          <Col xs={2}>
            <p className="complex-infra-text">Частная школа</p>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
