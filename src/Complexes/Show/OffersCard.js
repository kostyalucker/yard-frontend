import React from "react";
import { Col } from "react-flexbox-grid";

export default props => {
  return (
    <Col xs={4}>
      <div className="complex-offers-item">
        <h3 className="complex-card-title">
          {props.roomsCount}-комнатные квартиры
        </h3>
        <p className="complex-card-info">
          <span className="complex-card-name">Площадь</span>
          {props.area}
        </p>
        <p className="complex-card-info">
          <span className="complex-card-name">Стоимость</span>
          {props.value}
        </p>
        <div className="complex-card-btn">Посмотреть предложения</div>
      </div>
    </Col>
  );
};
