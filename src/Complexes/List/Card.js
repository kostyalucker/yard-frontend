import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "react-flexbox-grid";

export default props => {
  return (
    <Grid>
      <Link className="compass-card-link" to="/complex">
        <img
          src={process.env.PUBLIC_URL + "./img/bitmap.jpg"}
          className="compass-card-img"
          alt="complex-preview"
        />
        <article className="compass-card-info">
          <p className="compass-card-location">
            {props.location}
          </p>
          <h3 className="compass-card-title">
            {props.address}
          </h3>
          <p className="compass-card-description">
            {props.children}
          </p>
        </article>
      </Link>
    </Grid>
  );
};
