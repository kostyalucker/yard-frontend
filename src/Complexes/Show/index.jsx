import React from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import ComplexHeadline from './ComplexHeadline';
import Gallery from './Gallery';
import Info from './Info';
import Specifications from './Specifications';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';

const Complex = styled(BodyClassName)`
  background: #ffffff;
`;

export default () =>
    (<Complex>
      <div className="App">
        <ComplexHeadline />
        <Gallery />
        <Info
          flat={950}
          architect="John McAslan + Partners"
          builder="Группа «ПСН»"
        />
        <Specifications
          counter={1503}
          status="Квартиры"
          price={{ min: 8.4, max: 20.2 }}
        />
        <Description />
        <Infrastructure />
        <Offers />
        <Guide />
      </div>
    </Complex>);

