import React from "react";
import { Grid, Row } from "react-flexbox-grid";

export default props => {
  return (
    <Grid>
      <Row>
        <h2 className="complex-info-title">
          {props.offers}
          <small className="complex-info-subheading">предложений</small>
        </h2>
        <h2 className="complex-info-title">
          {props.architect}
          <small className="complex-info-subheading">предложений</small>
        </h2>
        <h2 className="complex-info-title">
          {props.builder}
          <small className="complex-info-subheading">предложений</small>
        </h2>
      </Row>
    </Grid>
  );
};
