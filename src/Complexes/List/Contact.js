import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default () => {
  return (
    <section className="compass-contact">
      <Grid>
        <div className="compass-contact-wrap">
          <h2 className="compass-contact-title">discover our new developments</h2>
          <p className="compass-contact-description">
            Compass brings a modern approach to new development marketing and sales. From boutique rental
            <br/> conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.
          </p>
          <button className="compass-contact-button">contact the team</button>
        </div>
      </Grid>
    </section>
  );
};