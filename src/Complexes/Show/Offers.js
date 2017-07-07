import React from 'react';
import OffersCard from './OffersCard';

export default () => {
  return (
    <section className="complex-offers">
      <div className="container">
        <h2 className="complex-offers-title">Предложения в ЖК «Полянка/44»</h2>
        <div className="row">
          <OffersCard 
            title="1-комнатные квартиры"
            nameFirst="Площадь"
            valueFirst="от 59 до 120 м²"
            nameSecond="Стоимость"
            valueSecond="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
           />
           <OffersCard 
            title="2-комнатные квартиры"
            nameFirst="Площадь"
            valueFirst="от 59 до 120 м²"
            nameSecond="Стоимость"
            valueSecond="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
           /> 
           <OffersCard 
            title="3-комнатные квартиры"
            nameFirst="Площадь"
            valueFirst="от 59 до 120 м²"
            nameSecond="Стоимость"
            valueSecond="от 20.3 до 84.2 млн руб"
            button="Посмотреть предложения"
           /> 
        </div>
      </div>
    </section>
  );
};