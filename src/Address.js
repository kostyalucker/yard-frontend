import React from 'react';

export default () => {
  return (
    <section class="complex-address">
      <div class="container">
        <div class="complex-map">
          <div class="row">
            <div class="col-xs-6">
              <div class="complex-address-map">
                <img src="img/map.png" alt="Map" class="complex-map-img"/>
              </div>
            </div>
            <div class="col-xs-6">
              <div class="complex-address-points">
                <div class="complex-address-point">
                  <h4 class="complex-point-title">Красный Октябрь</h4>
                  <p class="complex-point-text">24 минуты, 6 км</p>
                </div>
                <div class="complex-address-point">
                  <h4 class="complex-point-title">World class</h4>
                  <p class="complex-point-text">2 минуты, 300 м</p>
                </div>
                <div class="complex-address-point">
                  <h4 class="complex-point-title">Третьяковская Галерея</h4>
                  <p class="complex-point-text">14 минут, 4 км</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};