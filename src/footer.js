import React from 'react';
import arrowIcon from './img/combined-shape.svg';

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <div className="footer-contacts">
              <h4 className="footer-contacts-title">ООО «Ярд»</h4>
              <p className="footer-contacts-text">ОГРН 1175074002531</p>
              <p className="footer-contacts-text">ИНН 5036165365</p>
              <p className="footer-contacts-number">+7 (999) 821-14-88</p>
            </div>
          </div>
          <div className="col-xs-2">
            <nav className="footer-nav">
              <h4 className="footer-contacts-title">Жилые комплексы</h4>
              <a href="/" className="footer-link">
                ВТБ Арена Парк
              </a>
              <a href="/" className="footer-link">
                Садовые кварталы
              </a>
              <a href="/" className="footer-link">
                Резиденция Монэ
              </a>
              <a href="/" className="footer-link footer-link-last">
                Все ЖК Москвы <img className="footer-link-arrow" src={arrowIcon} alt="arrow"/>
              </a>
            </nav>
          </div>
          <div className="col-xs-2">
            <nav className="footer-nav">
              <h4 className="footer-contacts-title">Компания</h4>
              <a href="/" className="footer-link">
                Команда
              </a>
             <a href="/" className="footer-link">
                О Компании
              </a>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-4">
            <p className="footer-text-copyright">
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};