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
            area="от 59 до 120 м²"
            value="от 20.3 до 84.2 млн руб"
          />
          <OffersCard
            roomsCount="2"
            area="от 59 до 120 м²"
            value="от 20.3 до 84.2 млн руб"
          />
          <OffersCard
            roomsCount="3"
            area="от 59 до 120 м²"
            value="от 20.3 до 84.2 млн руб"
          />
        </Row>
      </Grid>
    </section>
  );
};
