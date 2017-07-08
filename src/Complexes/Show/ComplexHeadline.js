import React from "react";
import { Grid } from "react-flexbox-grid";

export default () => {
  return (
    <section className="complex-headline">
      <Grid>
        <div className="complex-headline-wrap">
          <h1 className="complex-headline-title">
            Жилой комплекс «Полянка/44»
          </h1>
          <p className="complex-headline-text">
            Район Якиманка, улица Большая Полянка, дом 44 • 119180
          </p>
          <div className="headline-button-wrap">
            <button className="headline-button">В избранное</button>
          </div>
        </div>
      </Grid>
    </section>
  );
};
