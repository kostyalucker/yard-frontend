import React from 'react';
import guideImage from './img/polyanka-photo.png';
import guideMap from './img/map.png';

export default () => {
  return (
    <section className="Jakimanka">
      <div className="complex-guide">
        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <h2 className="complex-guide-title">Якиманка</h2>
              <h3 className="complex-guide-subheading">Исторический центр Москвы в двух <br /> километрах от Кремля</h3>
              <a href="/" className="complex-guide-link">Гид по Якиманке →</a>
            </div>
            <div className="col-xs-6">
              <img src={guideImage} alt="1" className="complex-guide-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="complex-address">
        <div className="container">
          <div className="complex-map">
            <div className="row">
              <div className="col-xs-6">
                <div className="complex-address-map">
                  <img src={guideMap}alt="Map" className="complex-map-img"/>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="complex-address-points">
                  <div className="complex-address-point">
                    <h4 className="complex-point-title">Красный Октябрь</h4>
                    <p className="complex-point-text">24 минуты, 6 км</p>
                  </div>
                  <div className="complex-address-point">
                    <h4 className="complex-point-title">World className</h4>
                    <p className="complex-point-text">2 минуты, 300 м</p>
                  </div>
                  <div className="complex-address-point">
                    <h4 className="complex-point-title">Третьяковская Галерея</h4>
                    <p className="complex-point-text">14 минут, 4 км</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};