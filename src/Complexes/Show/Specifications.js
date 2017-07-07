import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <section className="complex-specific">
      <Grid>
        <h2 className="complex-specific-title">Характеристики</h2>
        <Row>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Статус:</dt>
              <dd className="complex-specific-list-value">Квартиры</dd>
              <dt className="complex-specific-list-title">Цены:</dt>
              <dd className="complex-specific-list-value">от 5.3 до 143.5 млн</dd>
              <dt className="complex-specific-list-title">Безопасность</dt>
              <dd className="complex-specific-list-value">Охраняемая территория</dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
            </dl>
          </Col>
          <Col xs={4}>
            <dl className="complex-specific-list">
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
              <dt className="complex-specific-list-title">Количество квартир:</dt>
              <dd className="complex-specific-list-value">1 503</dd>
            </dl>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};