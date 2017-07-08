import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

export default props => {
  return (
    <section className="complex-specific">
      <Grid>
        <h2 className="complex-specific-title">Характеристики</h2>
        <Row>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">
                Количество квартир:
              </dt>
              <dd className="complex-specific-list-value">
                {props.flat}
              </dd>
              <dt className="complex-specific-list-title">Статус:</dt>
              <dd className="complex-specific-list-value">
                {props.status}
              </dd>
              <dt className="complex-specific-list-title">Цены:</dt>
              <dd className="complex-specific-list-value">
                от {props.price.min} до {props.price.max} млн руб.
              </dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">
                Количество квартир:
              </dt>
              <dd className="complex-specific-list-value">
                {props.flat}
              </dd>
              <dt className="complex-specific-list-title">Статус:</dt>
              <dd className="complex-specific-list-value">
                {props.status}
              </dd>
              <dt className="complex-specific-list-title">Цены:</dt>
              <dd className="complex-specific-list-value">
                от {props.price.min} до {props.price.max} млн руб.
              </dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">
                Количество квартир:
              </dt>
              <dd className="complex-specific-list-value">
                {props.flat}
              </dd>
              <dt className="complex-specific-list-title">Статус:</dt>
              <dd className="complex-specific-list-value">
                {props.status}
              </dd>
              <dt className="complex-specific-list-title">Цены:</dt>
              <dd className="complex-specific-list-value">
                от {props.price.min} до {props.price.max} млн руб.
              </dd>
            </dl>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};
