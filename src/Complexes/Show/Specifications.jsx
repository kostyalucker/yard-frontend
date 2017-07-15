import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { securityKinds, constructionKinds, quarters } from './Dictionary';

const Specifications = styled.section`
  padding-bottom: 2.5rem;
  padding-left: 1rem;
`;

const Heading = styled.h2`
  margin-top: 2.3rem;
  margin-bottom: 0;
  padding-bottom: 1.125rem;
  font-family: 'Philosopher', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e4247;
`;

const List = styled.dl`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Key = styled.dt`
  font-family: Fira Sans;
  margin-bottom: 0.7rem;
  flex: 0 0 50%;
  font-size: 1rem;
  color: #a9afb6;
  line-height: 1.38;
  font-weight: 400;
`;

const Value = styled.dd`
  font-family: Fira Sans;
  margin-left: auto;
  text-align: left;
  flex: 0 0 50%;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
`;

export default function (props) {
  const statistics = props.complex.statistics || {};
  const totalPrimaryArea = statistics.totalPrimaryArea || {};
  const price = statistics.price || {};
  const priceFrom = price.from || {};
  const priceTo = price.to || {};
  const details = props.complex.details || {};
  const ceilHeight = details.ceilHeight || {};
  return (
    <Specifications>
      <Grid>
        <Heading>Характеристики</Heading>
        <Row>
          <Col xs={4}>
            <List>
              <Key>Цена:</Key>
              <Value>
                От {Math.floor(priceFrom.rub / 10000) / 100} до&nbsp;
                {Math.floor(priceTo.rub / 10000) / 100} млн
              </Value>
              <Key>Безопасность:</Key>
              <Value>
                {securityKinds[details.security]}
              </Value>
            </List>
          </Col>
          <Col xs={4}>
            <List>
              <Key>Конструкция корпусов:</Key>
              <Value>
                {constructionKinds[details.constructionKind]}
              </Value>
              <Key>Площадь:</Key>
              <Value>
                От {Math.abs(totalPrimaryArea.from).toFixed(2)} до&nbsp;
                {Math.abs(totalPrimaryArea.to).toFixed(2)} м²
              </Value>
              <Key>Высота потолков:</Key>
              <Value>
                {Math.abs(ceilHeight.from).toFixed(2)} -&nbsp;
                {Math.abs(ceilHeight.to).toFixed(2)} м
              </Value>
              <Key>Обслуживание:</Key>
              <Value>
                {details.maintenanceCosts} руб / м² / месяц
              </Value>
            </List>
          </Col>
          <Col xs={4}>
            <List>
              <Key>Начало строительства:</Key>
              <Value>
                {quarters[details.startQuarter]} квартал {details.startYear} года;
              </Value>
              <Key>Конец строительства:</Key>
              <Value>
                {quarters[details.commissioningQuarter]} квартал {details.commissioningYear} года;
              </Value>
              <Key>Наземная парковка:</Key>
              <Value>
                {details.parking === undefined && 'Нет'}
                {details.parking > 0 && `${details.parking} м/м`}
              </Value>
              <Key>Подземная парковка:</Key>
              <Value>
                {details.undergroundGarages === undefined && 'Нет'}
                {details.undergroundGarages > 0 &&
                  `${details.undergroundGarages} м/м`}
              </Value>
            </List>
          </Col>
        </Row>
      </Grid>
    </Specifications>
  );
}
