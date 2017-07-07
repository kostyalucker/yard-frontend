import React from 'react';
import arrowIcon from './img/combined-shape.svg';

export default () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-4">
            <div class="footer-contacts">
              <h4 class="footer-contacts-title">ООО «Ярд»</h4>
              <p class="footer-contacts-text">ОГРН 1175074002531</p>
              <p class="footer-contacts-text">ИНН 5036165365</p>
              <p class="footer-contacts-number">+7 (999) 821-14-88</p>
            </div>
          </div>
          <div class="col-xs-2">
            <nav class="footer-nav">
              <h4 class="footer-contacts-title">Жилые комплексы</h4>
              <a href="#" class="footer-link">
                ВТБ Арена Парк
              </a>
              <a href="#" class="footer-link">
                Садовые кварталы
              </a>
              <a href="#" class="footer-link">
                Резиденция Монэ
              </a>
              <a href="#" class="footer-link footer-link-last">
                Все ЖК Москвы <img class="footer-link-arrow" src="img/combined-shape.svg" alt="arrow"/>
              </a>
            </nav>
          </div>
          <div class="col-xs-2">
            <nav class="footer-nav">
              <h4 class="footer-contacts-title">Компания</h4>
              <a href="#" class="footer-link">
                Команда
              </a>
             <a href="#" class="footer-link">
                О Компании
              </a>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-8 col-xs-offset-4">
            <p class="footer-text-copyright">
              Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. © ООО «Ярд», 2017
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};