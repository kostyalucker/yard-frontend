import React from "react";
import { Grid } from "react-flexbox-grid";
<<<<<<< HEAD
=======

>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
import Develop from "./Develop";
import Contact from "./Contact";
import Card from "./Card";

export default () => {
  return (
    <div>
      <Develop />
<<<<<<< HEAD
      <Grid>
        <Contact />
        <Card
          src={process.env.PUBLIC_URL + "./img/bitmap.jpg"}
=======
      <Contact />
      <Grid>
        <Card
          src={process.env.PUBLIC_URL + "./img/bitmap.png"}
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
          location="SOUTH BEACH, SAN FRANCISCO"
          address="764 Metropolitan Avenue"
        >
          The Lewis Steel Building is a masterful industrial conversion located
          in the heart of Williamsburg. Located at 76 North 4th Street, the
          former 1930's steel factory has been transformed into 83 individually
          unique and luxury loft apartments.
        </Card>
        <Card
<<<<<<< HEAD
          src={process.env.PUBLIC_URL + "./img/bitmap.jpg"}
=======
          src={process.env.PUBLIC_URL + "./img/bitmap.png"}
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
          location="MIDTOWN EAST, MANHATTAN"
          address="100 East 53rd Street"
        >
          One Hundred East Fifty Third Street by Foster + Partners is a limited
          collection of modern residences in Midtown Manhattan's Cultural
          District. The 94 residences ranging from alcove lofts to four bedrooms
<<<<<<< HEAD
          within the 63-story tower are generously proportioned.
        </Card>
        <Card
          src={process.env.PUBLIC_URL + "./img/bitmap.jpg"}
=======
          within the 63-story tower are generously proportioned
        </Card>
        <Card
          src={process.env.PUBLIC_URL + "./img/bitmap.png"}
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
          location="NOLITA, MANHATTAN"
          address="152 Elizabeth"
        >
          152 Elizabeth is an ultra-luxury condominium building—the first in New
          York City designed by Japanese master architect Tadao Ando. Located at
          the corner of Kenmare and Elizabeth Streets in Nolita, the
          32,000-square-foot building will stand as a profound architectural
<<<<<<< HEAD
          statement and embrace the industrial character of the neighborhood.
=======
          statement and embrace the industrial character of the neighborhood
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
        </Card>
      </Grid>
    </div>
  );
};
