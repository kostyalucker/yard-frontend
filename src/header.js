import React from 'react';
import headerLogo from './compass-logo.svg';

export default () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrap">
          <img className="header-logo" src={headerLogo} alt="logo"/>
          <nav>
            <a className="header-nav-link" href="/">
              Купить
            </a>
            <a className="header-nav-link" href="/">
              Снять
            </a>
            <a className="header-nav-link" href="/">
              Наши агенты
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
