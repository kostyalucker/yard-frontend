import React from 'react';
import headerLogo from './img/compass-logo.svg';

export default () => {
  return (
    <header class="header">
      <div class="container">
        <div class="header-wrap">
          <img class="header-logo" src="img/compass-logo.svg" alt="logo"/>
          <nav>
            <a class="header-nav-link" href="#">
              Купить
            </a>
            <a class="header-nav-link" href="#">
              Снять
            </a>
            <a class="header-nav-link" href="#">
              Наши агенты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
