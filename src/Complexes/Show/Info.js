import React from 'react';
import InfoItem from './InfoItem';

export default () => {
  return (
    <section className="complex-info">
      <div className="container">
        <div className="complex-info-wrap">
          <InfoItem 
            info-title="950"
            info-subheading="предложений"
          />
          <InfoItem 
            info-title="John McAslan + Partners"
            info-subheading="архитектор"
          />
          <InfoItem 
            info-title="Группа «ПСН»"
            info-subheading="застройщик"
          />
        </div>
      </div>
    </section>
  );
};
