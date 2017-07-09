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
          от {props.area.min} до {props.area.max} м²
        </p>
        <p className="complex-card-info">
          <span className="complex-card-name">Стоимость</span>
          от {props.price.min} до {props.price.max} м²
        </p>
        <div className="complex-card-btn">Посмотреть предложения</div>
      </div>
    </Col>
  );
};
