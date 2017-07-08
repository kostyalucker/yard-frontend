import React from "react";
import InfoItem from "./InfoItem";
import { Grid } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-info">
      <Grid>
        <div className="complex-info-wrap">
          <InfoItem title="950" subheading="предложений" />
          <InfoItem title="John McAslan + Partners" subheading="архитектор" />
          <InfoItem title="Группа «ПСН»" subheading="застройщик" />
        </div>
      </Grid>
    </section>
  );
};
