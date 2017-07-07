import React from 'react';
import cardimg from './img/bitmap.jpg';

export default () => {
    return (
      <section className="compass-cards">
        <div className="container">
          <a className="compass-card-link" href="#">
            <img className="compass-card-img" src={cardimg} alt="bitmap"/>
            <article className="compass-card-info">
              <p className="compass-card-location">SOUTH BEACH, SAN FRANCISCO</p>
              <h3 className="compass-card-title">764 Metropolitan Avenue</h3>
              <p className="compass-card-description">
                The Lewis Steel Building is a masterful industrial conversion located in the heart <br/>
                of Williamsburg. Located at 76 North 4th Street, the former 1930's steel factory <br/>
                has been transformed into 83 individually unique and luxury loft apartments.
              </p>
            </article>
          </a>
          <a className="compass-card-link" href="#">
            <img className="compass-card-img" src={cardimg} alt="bitmap" />
            <article className="compass-card-info">
              <p className="compass-card-location">MIDTOWN EAST, MANHATTAN</p>
              <h3 className="compass-card-title">100 East 53rd Street</h3>
              <p className="compass-card-description">
                One Hundred East Fifty Third Street by Foster + Partners is a limited collection of <br/>
                modern residences in Midtown Manhattan's Cultural District. The 94 residences <br/>
                ranging from alcove lofts to four bedrooms within the 63-story tower are <br/>
                generously proportioned.
              </p>
            </article>
          </a>
          <a className="compass-card-link" href="#">
            <img className="compass-card-img" src={cardimg} alt="bitmap"/>
            <article className="compass-card-info">
              <p className="compass-card-location">NOLITA, MANHATTAN</p>
              <h3 className="compass-card-title">152 Elizabeth</h3>
              <p className="compass-card-description">
              152 Elizabeth is an ultra-luxury condominium building—the first in New York City <br/> designed by Japanese master architect Tadao Ando. Located at the corner of <br/>
              Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will <br/>
              stand as a profound architectural statement and embrace the industrial <br/>
              character of the neighborhood.
              </p>
            </article>
          </a>
        </div>
      </section>
    );
};