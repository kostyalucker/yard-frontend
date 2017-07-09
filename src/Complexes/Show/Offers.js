import React from "react";
import OffersCard from "./OffersCard";
import { Grid, Row } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-offers">
      <Grid>
        <h2 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h2>
        <Row>
          <OffersCard
            roomsCount="1"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
          <OffersCard
            roomsCount="2"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
          <OffersCard
            roomsCount="3"
            area={{ min: 59, max: 120 }}
            price={{ min: 20.3, max: 84.2 }}
          />
        </Row>
      </Grid>
    </section>
  );
};
