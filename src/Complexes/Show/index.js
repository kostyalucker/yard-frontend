import React from "react";

import ComplexHeadline from "./ComplexHeadline";
import Gallery from "./Gallery";
import Info from "./Info";
import Specifications from "./Specifications";
import Description from "./Description";
import Infrastructure from "./Infrastructure";
import Offers from "./Offers";
import Guide from "./Guide";

export default () => {
  return (
    <div className="bg-complex">
      <ComplexHeadline />
      <Gallery />
      <Info
        offers={950}
        architect="John McAslan + Partners"
        builder="Группа «ПСН»"
      />
      <Specifications
        flat={1503}
        status="Квартиры"
        price={{ min: 8.4, max: 20.2 }}
      />
      <Description />
      <Infrastructure />
      <Offers />
      <Guide />
    </div>
  );
};
