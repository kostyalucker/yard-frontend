import React from 'react';

import ComplexHeadline from './ComplexHeadline';
import Gallery from './Gallery';
import Info from './Info';
import Specifications from './Specifications';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';

export default () => {
  return (
    <div className="bg-complex">
      <ComplexHeadline />
      <Gallery />
      <Info />
      <Specifications />
      <Description />
      <Infrastructure />
      <Offers />
      <Guide />
    </div>
  );
};