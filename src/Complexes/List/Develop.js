import React from 'react';
import developLogo from '../../compass-development-logo.svg';

export default () => {
  return (
    <section className="compass-develop">
      <img src={developLogo} className="compass-develop-logo" alt="logo"/>
    </section>
  );
};